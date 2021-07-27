import { useMutation } from "react-query";

export default function useRegUser() {
    return useMutation((values) =>
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(values),
        }).then((res) => res.json())
    );
}
