import { useMutation } from "react-query";
import createUser from "../api/createUser";
import tryFindUser from "../api/tryFindUser";

export default function useRegUser() {
    return useMutation(async ({ id, username, firstname, lastname, dateOfBirth, email, password }) => {
        const isUserExist = await tryFindUser({ username });

        if (!isUserExist) {
            return await createUser({ id, username, firstname, lastname, dateOfBirth, email, password });
        } else {
            throw new Error("Username taken");
        }
    });
}
