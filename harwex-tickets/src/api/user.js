import ApiEndPoint from "../config/constants/ApiEndPoint";

const getUsers = () => {
    return fetch(`${ApiEndPoint}/api/user`);
};

const getUser = (id = null) => {
    if (!id) {
        throw new Error("User GET request: id must be set.");
    }

    return fetch(`${ApiEndPoint}/api/user/${id}`);
};

const postUser = (user) => {
    if (!user) {
        throw new Error("User POST request: user must be set.");
    }

    return fetch(`${ApiEndPoint}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    });
};

const putUser = (user) => {
    if (!user) {
        throw new Error("User PUT request: user must be set.");
    }

    return fetch(`${ApiEndPoint}/api/user/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    });
};

const deleteUser = (id) => {
    if (!id) {
        throw new Error("User DELETE request: id must be set.");
    }

    return fetch(`${ApiEndPoint}/api/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
};

export { getUsers, getUser, postUser, putUser, deleteUser };
