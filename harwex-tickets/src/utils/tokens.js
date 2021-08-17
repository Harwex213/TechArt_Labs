export const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", `Bearer ${accessToken}`);
    localStorage.setItem("refreshToken", refreshToken);
};

export const deleteTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
