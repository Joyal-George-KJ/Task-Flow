import React from "react";
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Task() {
    const { id } = useParams();
    console.log(id);

    const projects = useSelector((state) => state.project[id]);

    return (
        <div className="flex flex-col w-full gap-6 py-4 mb-4 bg-neutral-50 rounded-xl">
            <div className="grid gap-4 px-4 mx-4 border-l-8">
                <p className="text-2xl font-bold text-neutral-700">Task</p>
                <p className="font-light text-neutral-700">
                    All Tasks show here.
                </p>
            </div>

            <div className="grid w-full gap-4 px-4 card-container md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1">
                {projects.tasks?.length === 0 && (
                    <p className="w-full text-2xl font-light text-center capitalize text-neutral-400">
                        - No tasks left! -
                    </p>
                )}
                {projects.tasks?.map((val, ind) => (
                    <TaskCard
                        ProjectIndex={id}
                        TaskIndex={ind}
                        name={val.task}
                        tags={val.tags}
                        status={val.status}
                        key={ind}
                    />
                ))}
            </div>
        </div>
    );
}

export default Task;
