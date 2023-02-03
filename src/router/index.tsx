import { createBrowserRouter } from "react-router-dom";
import App from "@/router/routes/App/App";
import Main from "@/router/routes/Main";
import Classify from "@/router/routes/Main/classify";
import ErrorPage from "@/router/routes/ErrorPage";
import View, { loader as viewLoader } from "@/router/routes/View";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            index: true,
            id: "home",
            element: <Main />
        },
        // 之后改
        {
            path: "/types/:typeid/:page",
            element: <>page</>
        }
        , {
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