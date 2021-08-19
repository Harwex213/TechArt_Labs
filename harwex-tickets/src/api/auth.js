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

const logout = ({ accessToken }) => {
    return fetch(`${ApiEndPoint}/auth/logout`, {
        method: "POST",
        headers: {
            Authorization: accessToken,
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

const refresh = ({ refreshToken }) => {
    return fetch(`${ApiEndPoint}/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ refreshToken }),
    });
};

const authApi = {
    login,
    logout,
    register,
    refresh,
};

export default authApi;
