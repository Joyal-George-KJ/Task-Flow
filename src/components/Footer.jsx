import React from "react";

function Footer() {
    return (
        <footer className="z-50 flex justify-center p-4 px-8 bg-white border-t shadow-sm border-neutral-700">
            <div className="text-center">
                <p>© 2024 TaskFlow. All rights reserved.</p>
                <div className="mt-4">
                    <a
                        href="https://github.com/Joyal-Geroge-KJ/TaskFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 text-blue-600 hover:underline"
                    >
                        GitHub Repo
                    </a>
                    <a
                        href="https://Joyal-Geroge-KJ.github.io/TaskFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 text-blue-600 hover:underline"
                    >
                        Website Link
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
