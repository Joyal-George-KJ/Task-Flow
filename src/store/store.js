import { configureStore } from "@reduxjs/toolkit";
import project from './slice/projectSlice'

export const store = configureStore({
    reducer: {
        project
    },
})

export default store;