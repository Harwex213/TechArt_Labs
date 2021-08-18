import jwtDecode from "jwt-decode";

export const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", `Bearer ${accessToken}`);
    localStorage.setItem("refreshToken", refreshToken);
};

export const deleteTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

export const checkAccessTokenOnExp = (accessToken) => {
    if (accessToken) {
        const decoded = jwtDecode(accessToken);
        const expirationTime = Number(decoded["exp"]) * 1000;
        return expirationTime < Date.now();
    }
    return false;
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
