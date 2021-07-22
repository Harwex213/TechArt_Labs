const TryFindUser = async ({ username, password }) => {
    const response = await fetch(`http://localhost:3001/users?username=${username}&password=${password}`);
    return (await response.json()).length !== 0;
};

export { TryFindUser };
