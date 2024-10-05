import React from "react";

function Home() {
    return (
        <main className="flex flex-col justify-center flex-grow w-full text-center py-36">
            <h2 className="mb-2 font-bold sm:text-5xl md:text-5xl xl:text-6xl lg:text-5xl xs:text-3xl text-neutral-600">Welcome to TaskFlow</h2>
            <p className="mb-6 font-medium md:text-base sm:text-base xl:text-xl lg:text-base xs:text-sm xs:font-normal text-neutral-600">
                TaskFlow is a lightweight tool to help you organize and manage
                your projects and tasks effortlessly. <br />
                <q>Create, update, and track your tasks in real-time.</q>
            </p>
        </main>
    );
}

export default Home;