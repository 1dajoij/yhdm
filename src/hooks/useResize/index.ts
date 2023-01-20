import { useState, useEffect } from "react";

const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
});

const useResize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const handleResize = () => {
        setWindowSize(getWindowSize());
    }

    useEffect(() => {
        // 监听
        window.addEventListener("resize", handleResize);
        // 销毁
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export default useResize