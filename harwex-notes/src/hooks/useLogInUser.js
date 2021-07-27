import { useMutation } from "react-query";
import emptyRequest from "../api/emptyRequest";

export default function useLogInUser() {
    return useMutation(emptyRequest, {
        onSuccess: (data, values) => {
            localStorage.setItem("user", JSON.stringify({ username: values.username }));
        },
    });
}
