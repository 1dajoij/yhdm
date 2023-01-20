import { createBrowserRouter } from "react-router-dom";
import Main from "@/components/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
]);