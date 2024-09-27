import { createSlice } from "@reduxjs/toolkit";
import { DataManager } from "../../common/DataManager";

// Initial state
const initialState = DataManager.getDataLocalStorage('project') || [{
    projectName: 'common tasks',
    tasks: [],
}];

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProject(state, action) { // to set a new project
            const {projectName, tasks} = action.payload;
            state.push({
                projectName: projectName,
                tasks: tasks || [],
            });
        },
        updateProject(state, action) { // update a project
            const { projectIndex, newProjectName } = action.payload;
            if (state[projectIndex]) {
                state[projectIndex].projectName = newProjectName || state[projectIndex].projectName;
            }
        },
        deleteProject(state, action) { // delete a project
            const { projectIndex } = action.payload;
            if (projectIndex >= 0 && projectIndex < state.length) {
                state.splice(projectIndex, 1);
            }
        },
        setTask(state, action) { // add a task to a project
            const { projectIndex, task, tags } = action.payload;
            if (state[projectIndex]) {
                state[projectIndex].tasks = state[projectIndex].tasks || []; // Initialize tasks array if not exist
                state[projectIndex].tasks.push({
                    task,
                    tags: tags || [],
                    status: null
                });
            }
        },
        updateTask(state, action) { // update a task
            const { projectIndex, taskIndex, updateKey, updateValue } = action.payload;
            if (state[projectIndex] && state[projectIndex].tasks[taskIndex]) {
                state[projectIndex].tasks[taskIndex][updateKey] = updateValue;
            }
        },
        deleteTask(state, action) { // delete a task from a project
            const { projectIndex, taskIndex } = action.payload;
            if (state[projectIndex] && state[projectIndex].tasks[taskIndex]) {
                state[projectIndex].tasks.splice(taskIndex, 1);
            }
        },
        updateLocalStorage(state) { // persist the state to local storage
            DataManager.setDataLocalStorage('project', state);
        }
    }
});

export const { setProject, updateProject, deleteProject, updateLocalStorage, setTask, deleteTask, updateTask } = projectSlice.actions;
export default projectSlice.reducer;