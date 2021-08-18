const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
    return localStorage.getItem("user");
};

const userPersist = {
    saveUser,
    getUser,
};

export default userPersist;
