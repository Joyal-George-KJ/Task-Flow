import React from "react";

function Home() {
    return (
        <main className="flex-grow text-center py-36 w-full">
            <h2 className="text-6xl font-bold mb-4 text-neutral-600">Welcome to TaskFlow</h2>
            <p className="text-lg font-medium mb-6 text-neutral-600">
                TaskFlow is a lightweight tool to help you organize and manage
                your projects and tasks effortlessly. <br />
                Create, update, and track your tasks in real-time.
            </p>
        </main>
    );
}

export default Home;