const emptyRequest = () => fetch("http://localhost:3001/users").then((res) => res.status);

export default emptyRequest;
