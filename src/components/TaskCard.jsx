import React, { useEffect } from "react";
import Tags from "./Tags";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTask,
    updateLocalStorage,
    updateTask,
} from "../store/slice/projectSlice";
import { useState } from "react";
import Form from "./Form";

function TaskCard({ name, tags, status, TaskIndex, ProjectIndex }) {
    const selector = useSelector(
        (state) => state.project[ProjectIndex].tasks[TaskIndex].status
    );
    let [indicatorClass, setIndicatorCLass] = useState(selector);
    let [toggleForm, setToggleForm] = useState(false);
    const dispatch = useDispatch();

    const statusChanger = ({ val }) => {
        dispatch(
            updateTask({
                projectIndex: ProjectIndex,
                taskIndex: TaskIndex,
                updateKey: "status",
                updateValue: val,
            })
        );

        dispatch(updateLocalStorage());
    };

    const removeTask = () => {
        dispatch(
            deleteTask({
                projectIndex: ProjectIndex,
                taskIndex: TaskIndex,
            })
        );
        dispatch(updateLocalStorage());
    };

    useEffect(() => {
        if (status) {
            setIndicatorCLass("bg-green-300");
        } else if (status === null) {
            setIndicatorCLass("bg-orange-300");
        } else {
            setIndicatorCLass("bg-red-500");
        }
    });

    return (
        <div className="flex items-start justify-between w-full shadow card bg-neutral-200 rounded-xl">
            <div className="flex flex-wrap justify-between w-full p-4 card-main bg-neutral-50 rounded-xl">
                <div className="flex flex-wrap items-center w-5/6 gap-4 pb-4">
                    <span
                        className={`w-3 h-3 rounded-full border border-neutral-200 animate-pulse ${indicatorClass}`}
                    ></span>
                    <p className="capitalize text-neutral-700 font-base">
                        {name}
                    </p>
                </div>
                <div className="flex items-center justify-end w-1/6 gap-2 h-fit">
                    {status === true ? (
                        <button onClick={() => statusChanger({ val: null })}>
                            <i className="text-xl bi bi-pause-circle text-neutral-700 "></i>
                        </button>
                    ) : (
                        <button onClick={() => statusChanger({ val: true })}>
                            <i className="text-xl bi bi-check-circle text-neutral-700 "></i>
                        </button>
                    )}
                    {status === false ? (
                        <button onClick={() => statusChanger({ val: null })}>
                            <i className="text-xl bi bi-pause-circle text-neutral-700 "></i>
                        </button>
                    ) : (
                        <button onClick={() => statusChanger({ val: false })}>
                            <i className="text-xl bi bi-x-circle text-neutral-700 "></i>
                        </button>
                    )}
                    {status === false ? (
                        <button onClick={removeTask}>
                            <i className="text-xl bi bi-trash text-neutral-700 "></i>
                        </button>
                    ) : (
                        <button onClick={() => setToggleForm(!toggleForm)}>
                            <i className="text-xl bi bi-pencil-square text-neutral-700 "></i>
                        </button>
                    )}
                    {toggleForm && (
                        <Form
                            handleClick={() => setToggleForm(!toggleForm)}
                            topic={"task"}
                            update={true}
                            TaskIndex={TaskIndex}
                            ProjectIndex={ProjectIndex}
                            TaskName={name}
                            TaskTags={tags}
                        />
                    )}
                </div>
                <div className="flex flex-wrap items-center w-full gap-2 pt-4 border-t">
                    <p className="text-xs font-medium">Tags: </p>
                    <Tags tags={tags} />
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
