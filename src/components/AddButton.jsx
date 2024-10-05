import React, { useState } from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { updateLocalStorage } from "../store/slice/projectSlice";

function AddButton({ topic }) {
    const [toggleForm, setToggleForm] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        setToggleForm(!toggleForm);
        dispatch(updateLocalStorage()); // local storage updation
    };
    return (
        <>
            <button
                className="px-2 font-bold capitalize border-2 rounded text-neutral-700 border-neutral-600"
                onClick={handleClick}
            >
                <i className="text-xl font-bold bi bi-plus"></i>
                {/* new {topic} */}
            </button>
            {toggleForm && (
                <Form handleClick={handleClick} topic={topic} />
            )}
        </>
    );
}

export default AddButton;
