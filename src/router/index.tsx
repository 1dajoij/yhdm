import { createBrowserRouter } from "react-router-dom";
import App from "@/router/routes/App/App";
import Main from "@/router/routes/Main";
import Classify from "@/router/routes/Main/classify";
import Classify2, { loader as ClassLoader } from "@/router/routes/Main/Classify_"
import ErrorPage from "@/router/routes/ErrorPage";
import View, { loader as viewLoader } from "@/router/routes/View";
import Movie, { loader as movieLoader } from "@/router/routes/Movie";

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
            path: "/types/:typeid/:page",
            element: <Classify2 />,
            loader: ClassLoader
        }, {
            path: "/views/:viewid",
            loader: viewLoader,
            element: <View />
        }, {
            path: "/:viewid/:index",
            loader: movieLoader,
            element: <Movie />
        }]
    }
]);