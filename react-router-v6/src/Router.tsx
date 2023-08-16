import {
    BrowserRouter,
    Route,
    Routes,
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./screens/components/ErrorComponent";
import User from "./screens/users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                errorElement: <ErrorComponent></ErrorComponent>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "users/:user_id",
                element: <User></User>,
            },
        ],
        errorElement: <NotFound></NotFound>,
    },
]);

export default router;
