const TryFindUser = async ({ username = null, password = null }) => {
    if (!username) {
        return false;
    }

    let urlQuery = `?username=${username}`;
    if (password) {
        urlQuery += `&password=${password}`;
    }

    const response = await fetch("http://localhost:3001/users" + urlQuery);
    return (await response.json()).length !== 0;
};

export { TryFindUser };
