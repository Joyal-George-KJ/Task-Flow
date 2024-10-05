import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";

function NavBar() {
    const location = useLocation();
    const myRoutes = [{
        name: "home",
        path: '/'
    },
    {
        name: "project",
        path: '/project'
    }]
    const [active, setActive] = useState(null);
    useEffect(() => {
        if (location.pathname === "/") {
            setActive("home");
        } else if (location.pathname === "/project") {
            setActive("project");
        } else if (location.pathname.includes('/task/')) {
            setActive("task");
        }
    },[location]);

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 flex justify-between p-4 px-8 bg-white border-b shadow-sm border-neutral-700">
            <div className="flex gap-4">
                {
                    myRoutes.map((val, ind) => <NavLink value={val} key={ind} active={active} />)
                }
            </div>
            {(active === "project" || active === "task") && (
                <div>
                    <AddButton topic={active} />
                </div>
            )}
        </nav>
    );
}

export default NavBar;
