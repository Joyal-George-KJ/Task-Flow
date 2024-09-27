import React from "react";

function Tags({ close = null, tags = [], setTags }) {
    const closeHandle = (e) => {
        const index = parseInt(e.target.id); // Convert the index to a number
        const updatedTags = [...tags]; // Create a shallow copy of the tags array
        updatedTags.splice(index, 1); // Remove the tag at the given index
        setTags(updatedTags); // Update the tags state with the new array
    }
    return (
        <>
            {tags.map((val, ind) => (
                <p key={ind} className="px-2 py-1 text-neutral-700 rounded text-xs text-center items-center flex shadow border capitalize">
                    {val}
                    {close && (
                        <button
                            type="button"
                            id={ind}
                            onClick={(e) => closeHandle(e)}
                        >
                            <i id={ind} className="bi bi-x text-base ml-1 rounded-full text-neutral-800 font-extrabold"></i>
                        </button>
                    )}
                </p>
            ))}
        </>
    );
}

export default Tags;
