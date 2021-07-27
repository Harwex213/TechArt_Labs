import { useMutation } from "react-query";
import { CreateNewUser } from "../api/regUser";

export default function useRegUser() {
    return useMutation(CreateNewUser);
}
