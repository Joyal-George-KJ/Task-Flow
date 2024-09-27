import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Task from "./components/Task";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/task/:id" element={<Task />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
