import { useMutation } from "react-query";
import emptyRequest from "../api/emptyRequest";
import tryFindUser from "../api/tryFindUser";

export default function useLogInUser() {
    return useMutation(
        async ({ username, password }) => {
            const isUserExist = await tryFindUser({ username, password });

            if (isUserExist) {
                return await emptyRequest();
            } else {
                throw new Error("User not exist or wrong password");
            }
        },
        {
            onSuccess: (data, values) => {
                localStorage.setItem("user", JSON.stringify({ username: values.username }));
            },
        }
    );
}
