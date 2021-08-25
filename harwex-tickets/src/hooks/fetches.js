import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { notification } from "antd";

export const useFetchData = (fetcher, requestSelector, dataSelector) => {
    const dispatch = useDispatch();
    const request = useSelector(requestSelector);

    useEffect(() => {
        const action = async () => {
            await dispatch(fetcher());
        };
        if (request.status === "idle") {
            action();
        }
        if (request.status === "rejected") {
            notification["error"]({
                message: "Something went wrong...",
                description: request.error,
            });
        }
    }, [dispatch, fetcher, request]);

    return useSelector(dataSelector);
};
