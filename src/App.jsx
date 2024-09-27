import React from "react";
import Home from "./pages/Home";
import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Task from "./components/Task";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/task/:id" element={<Task />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
