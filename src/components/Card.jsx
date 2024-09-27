import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject, updateLocalStorage } from "../store/slice/projectSlice";
import Form from "./Form";

function Card({ val, id }) {
    const dispatch = useDispatch();
    let [toggleForm, setToggleForm] = useState(false);

    const removeProject = () => {
        dispatch(
            deleteProject({
                projectIndex: id
            })
        );
        dispatch(updateLocalStorage());
    };

    return (
        <div className="card w-[32.3%] min-h-64 shadow bg-neutral-200 rounded-xl flex justify-between items-end">
            <div className="card-main w-full flex justify-between p-4 bg-neutral-50 rounded-b-xl">
                <Link
                    to={`/task/${id}`}
                    className="w-3/4 capitalize text-neutral-700 font-medium"
                >
                    {val.projectName}
                </Link>
                <button onClick={removeProject}>
                    <i className="text-xl bi bi-trash text-neutral-700 "></i>
                </button>
                <button onClick={() => setToggleForm(!toggleForm)}>
                    <i className="text-xl bi bi-pencil-square text-neutral-700 "></i>
                </button>
                {toggleForm && <Form handleClick={() => setToggleForm(!toggleForm)} topic={'project'} update={true} ProjectIndex={id} />}
            </div>
        </div>
    );
}

export default Card;
