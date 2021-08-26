import ApiEndPoint from "../config/constants/ApiEndPoint";
import { getAccessToken } from "../utils/tokens";

const createTicket = ({ sessionId, seatId, userId }) => {
    return fetch(`${ApiEndPoint}/tickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: getAccessToken(),
        },
        body: JSON.stringify({ sessionId, seatId, userId }),
    });
};

export const ticketApi = {
    createTicket,
};
