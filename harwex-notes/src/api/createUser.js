const createUser = async (user) => {
    return fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    });
};

export default createUser;
