import { useMutation } from "react-query";
import FindUser from "../api/findUser";

export default function useFindUser() {
    return useMutation(FindUser);
}
