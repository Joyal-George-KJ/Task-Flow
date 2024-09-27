import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Projects() {
    const projects = useSelector(state => state.project)
    
    return (
        <div className="w-full py-4 flex gap-6 flex-col bg-neutral-50 mb-4 rounded-xl">
            <div className="grid gap-4 mx-4 px-4 border-l-8">
                <p className="text-2xl font-bold text-neutral-700">Project</p>
                <p className="font-light text-neutral-700">
                    All Projects shows here.
                </p>
            </div>
            <div className="w-full px-4 flex flex-wrap gap-4">
                {projects.length === 0 && <p className="w-full text-neutral-400 text-center font-light text-2xl capitalize">- No project left! -</p>}
                {
                    projects.map((val, ind) => <Card id={ind} val={val} key={ind} />)
                }
            </div>
        </div>
    );
}

export default Projects;
