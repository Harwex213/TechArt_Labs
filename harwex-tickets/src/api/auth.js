import ApiEndPoint from "../config/constants/ApiEndPoint";

const login = ({ username, password }) => {
    return fetch(`${ApiEndPoint}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ username, password }),
    });
};

const logout = () => {
    return fetch(`${ApiEndPoint}/auth/logout`, {
        method: "POST",
        headers: {
            Authorization: localStorage.getItem("accessToken"),
        },
        body: null,
    });
};

const register = ({ username, phoneNumber, password, confirmPassword }) => {
    return fetch(`${ApiEndPoint}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ username, phoneNumber, password, confirmPassword }),
    });
};

const refresh = () => {
    return fetch(`${ApiEndPoint}/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            refreshToken: localStorage.getItem("refreshToken"),
        }),
    });
};

const authApi = {
    login,
    logout,
    register,
    refresh,
};

export default authApi;
