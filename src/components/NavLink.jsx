import React from "react";
import { Link } from "react-router-dom";

function NavLink({value, active}) {
    return (
        <Link
            to={value.path}
            className={`text-xl hover:scale-90 hover:border-b-4 bg-white rounded pr-4 font-bold capitalize ${
                active === value.name && " border-b-4 border-neutral-700"
            }`}
        >
            {value.name}
        </Link>
    );
}

export default NavLink;
