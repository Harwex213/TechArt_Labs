export const saveLocalUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
