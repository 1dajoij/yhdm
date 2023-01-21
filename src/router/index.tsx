import { createBrowserRouter } from "react-router-dom";
import App from "@/router/routes/App";
import Main from "@/components/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            id: "home",
            element: <Main />
        }, {
            path: "/types_1",
            id: "CH",
            element: <>CH</>
        }, {
            path: "/types_2",
            id: "JP",
            element: <>JP</>
        }, {
            path: "/types_3",
            id: "MV",
            element: <>MV</>
        }, {
            path: "/types_4",
            id: "US",
            element: <>US</>
        }]
    }
]);