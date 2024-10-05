import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const projects = useSelector(state => state.project)
    
    return (
        <div className="flex flex-col w-full gap-6 py-4 mb-4 bg-neutral-50 rounded-xl">
            <div className="grid gap-4 px-4 mx-4 border-l-8">
                <p className="text-2xl font-bold text-neutral-700">Project</p>
                <p className="font-light text-neutral-700">
                    All Projects shows here.
                </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-4 px-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                {projects.length === 0 && <p className="w-full text-2xl font-light text-center capitalize text-neutral-400">- No project left! -</p>}
                {
                    projects.map((val, ind) => <ProjectCard id={ind} val={val} key={ind} />)
                }
            </div>
        </div>
    );
}

export default Projects;
