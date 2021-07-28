import { useMutation } from "react-query";
import emptyRequest from "../api/emptyRequest";

export default function useLogOutUser() {
    return useMutation(emptyRequest, {
        onSuccess: () => {
            localStorage.removeItem("user");
        },
        onError: (error) => alert(error.message),
    });
}
