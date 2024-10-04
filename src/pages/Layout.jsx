import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {

    return (
        <div className="w-screen min-h-screen relative pb-0 bg-neutral-200">
            <NavBar Link={Link} />
            <div className="grid min-h-96 w-full gap-6 px-4 pt-4 relative">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
