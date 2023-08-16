import {
    BrowserRouter,
    Route,
    Routes,
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "about",
                element: <About></About>,
            },
        ],
    },
]);

export default router;
