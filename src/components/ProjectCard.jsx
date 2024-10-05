import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject, updateLocalStorage } from "../store/slice/projectSlice";
import Form from "./Form";

function ProjectCard({ val, id }) {
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
        <div className="flex items-end justify-between w-full shadow card min-h-64 bg-neutral-200 rounded-xl">
            <div className="flex justify-between w-full p-4 card-main bg-neutral-50 rounded-b-xl">
                <Link
                    to={`/task/${id}`}
                    className="w-3/4 font-medium capitalize text-neutral-700"
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

export default ProjectCard;
