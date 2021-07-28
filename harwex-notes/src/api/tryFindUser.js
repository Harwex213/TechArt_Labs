const TryFindUser = async ({ username = null, password = null }) => {
    if (!username) {
        return false;
    }

    let urlQuery = `?username=${username}`;
    if (password) {
        urlQuery += `&password=${password}`;
    }

    return fetch("http://localhost:3001/users" + urlQuery);
};

export default TryFindUser;
