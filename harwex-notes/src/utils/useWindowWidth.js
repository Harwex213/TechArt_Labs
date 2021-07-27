import { useEffect, useState } from "react";

const getWindowWidth = () => document.documentElement.getBoundingClientRect().width;

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(() => getWindowWidth());

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(getWindowWidth());
        });
    });

    return windowWidth;
};

export { useWindowWidth };
