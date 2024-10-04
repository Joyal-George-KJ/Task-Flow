import React from "react";

function Footer() {
    return (
        <footer className="flex justify-center bg-white p-4 px-8 shadow-sm border-t border-neutral-700 z-50">
            <div className="text-center">
                <p>© 2024 TaskFlow. All rights reserved.</p>
                <div className="mt-4">
                    <a
                        href="https://github.com/Joyal-Geroge-KJ/TaskFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mx-4"
                    >
                        GitHub Repo
                    </a>
                    <a
                        href="https://Joyal-Geroge-KJ.github.io/TaskFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mx-4"
                    >
                        Website Link
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
