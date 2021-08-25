import ApiEndPoint from "../config/constants/ApiEndPoint";

const createTicket = ({ sessionId, seatId, userId }) => {
    return fetch(`${ApiEndPoint}/tickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ sessionId, seatId, userId }),
    });
};

export const ticketApi = {
    createTicket,
};
