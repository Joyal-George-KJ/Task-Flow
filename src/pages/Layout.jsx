import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {

    return (
        <div className="w-screen min-h-screen pb-0 bg-neutral-200">
            <NavBar Link={Link} />
            <div className="grid w-full gap-6 px-4 pt-4 relative">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
