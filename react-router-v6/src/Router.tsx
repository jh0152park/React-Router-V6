import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
