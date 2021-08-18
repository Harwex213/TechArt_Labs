import jwtDecode from "jwt-decode";

export const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", `Bearer ${accessToken}`);
    localStorage.setItem("refreshToken", refreshToken);
};

export const deleteTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

export const checkIsTokenExpired = (token) => {
    if (token) {
        const decoded = jwtDecode(token);
        const expirationTime = Number(decoded["exp"]) * 1000;
        return expirationTime < Date.now();
    }
    return true;
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
