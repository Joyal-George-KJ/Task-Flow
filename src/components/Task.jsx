import React from "react";
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Task() {
    const {id} = useParams();
    const projects = useSelector(state => state.project[id]);
    
    return (
        <div className="w-full py-4 flex gap-6 flex-col bg-neutral-50 mb-4 rounded-xl">
            <div className="grid gap-4 mx-4 px-4 border-l-8">
                <p className="text-2xl font-bold text-neutral-700">Task</p>
                <p className="font-light text-neutral-700">
                    All Tasks show here.
                </p>
            </div>

            <div className="card-container w-full px-4 flex flex-wrap gap-4">
                {projects.tasks?.length === 0 && <p className="w-full text-neutral-400 text-center font-light text-2xl capitalize">- No tasks left! -</p>}
                {projects.tasks?.map((val, ind) => <TaskCard ProjectIndex={id} TaskIndex={ind} name={val.task} tags={val.tags} status={val.status} key={ind}/>)}
            </div>
        </div>
    );
}

export default Task;
