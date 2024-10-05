import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    setProject,
    setTask,
    updateLocalStorage,
    updateProject,
    updateTask,
} from "../store/slice/projectSlice";
import Tags from "./Tags";

function Form({ handleClick, topic, update = false, ...props }) {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [tags, setTags] = useState(props?.TaskTags || []);
    
    const handleAddTags = () => {
        setTags([...tags, data.tag]);
        setData({...data, tag: ''})
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (topic === "task" && !update) {
            const projectIndex = location.hash.split('/')[2];

            dispatch(
                setTask({
                    projectIndex: projectIndex,
                    task: data.task,
                    tags: tags,
                })
            );
        }
        if (topic === "project" && !update) {
            dispatch(setProject({ projectName: data.project, tasks: [] }));
        }

        if (topic === "task" && update) {
            const projectIndex = props.ProjectIndex;

            dispatch(
                updateTask({
                    projectIndex: projectIndex,
                    taskIndex: props.TaskIndex,
                    updateKey: 'task',
                    updateValue: data.task 
                })
            );

            dispatch(
                updateTask({
                    projectIndex: projectIndex,
                    taskIndex: props.TaskIndex,
                    updateKey: 'tags',
                    updateValue: tags
                })
            );
        }
        if (topic === "project" && update) {
            dispatch(updateProject({ newProjectName: data.project, projectIndex: props.ProjectIndex }));
        }


        dispatch(updateLocalStorage());
        handleClick();
    };

    return (
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center w-screen h-screen gap-4 bg-neutral-400">
            <form
                action=""
                name="Controll Form"
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-4/5 gap-4 p-4 m-4 border-2 shadow bg-neutral-50 md:w-2/5 lg:w-2/5"
            >
                <input
                    type="text"
                    name={topic}
                    className="px-4 py-2 capitalize border shadow focus-visible:outline-neutral-400"
                    placeholder={topic + ":"}
                    value={topic === 'task' ? props?.TaskName : data[topic]}
                    required
                    onChange={(e) => handleChange(e)}
                />
                {topic === "task" && (
                    <div className="relative flex flex-wrap justify-between w-full">
                        <input
                            type="text"
                            name="tag"
                            id="tag"
                            required={tags.length === 0 ? true : false}
                            value={data.tag || ''}
                            placeholder="tag"
                            onChange={(e) => handleChange(e)}
                            className="w-5/6 px-4 py-2 capitalize border shadow focus-visible:outline-neutral-400"
                        />
                        <button
                            type="button"
                            onClick={handleAddTags}
                            className="w-1/6 p-2 font-bold border shadow bg-neutral-700 text-neutral-50 hover:bg-neutral-500"
                        >
                            +
                        </button>
                        <div className="flex flex-wrap items-center w-full gap-2 pt-4 border-t">
                            <Tags close={true} tags={tags} setTags={setTags} />
                        </div>
                    </div>
                )}
                <button
                    type="submit"
                    className="px-2 py-1 font-bold border shadow border-neutral-700 bg-neutral-700 text-neutral-50 hover:bg-neutral-500"
                >
                    Add
                </button>
                <button
                    type="button"
                    className="px-2 py-1 font-bold border shadow text-neutral-700 bg-neutral-50 hover:bg-neutral-200"
                    onClick={handleClick}
                >
                    Close
                </button>
            </form>
        </div>
    );
}

export default Form;
