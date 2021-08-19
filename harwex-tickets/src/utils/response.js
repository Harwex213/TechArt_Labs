export const validateResponse = (response, error) => {
    if (!response.ok) {
        throw new Error(error["errorMessages"]);
    }
};
