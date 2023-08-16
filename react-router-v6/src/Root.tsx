import React from "react";
import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./screens/components/Header";

function Root() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Root;
