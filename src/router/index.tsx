import { createBrowserRouter } from "react-router-dom";
import App from "@/router/App/App";
import Main from "@/router/Main";
import Classify from "@/router/Main/classify";
import ErrorPage from "@/router/ErrorPage";
import View, { loader as viewLoader } from "@/router/View";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            index: true,
            id: "home",
            element: <Main />
        }, {
            path: "/types_1",
            id: "CH",
            element: <Classify type={1} />
        }, {
            path: "/types_2",
            id: "JP",
            element: <Classify type={2} />
        }, {
            path: "/types_3",
            id: "MV",
            element: <Classify type={3} />
        }, {
            path: "/types_4",
            id: "US",
            element: <Classify type={4} />
        }, {
            path: "/views/:viewid",
            loader: viewLoader,
            element: <View />
        }]
    }
]);