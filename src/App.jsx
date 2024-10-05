import React, { lazy, Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyLayout = lazy(() => import("./pages/Layout"));
const LazyTask = lazy(() => import("./components/Task"));
const LazyHome = lazy(() => import("./pages/Home"));

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback="Loading...">
                            <LazyLayout />
                        </Suspense>
                    }
                >
                    <Route
                        index
                        element={
                            <Suspense fallback="Loading...">
                                <LazyHome />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/project"
                        element={
                            <Suspense fallback="Loading...">
                                <LazyProjects />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/task/:id"
                        element={
                            <Suspense fallback="Loading...">
                                <LazyTask />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
