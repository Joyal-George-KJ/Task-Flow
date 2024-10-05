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
                <p key={ind} className="flex items-center px-2 py-1 text-xs text-center capitalize border rounded shadow text-neutral-700">
                    {val}
                    {close && (
                        <button
                            type="button"
                            id={ind}
                            onClick={(e) => closeHandle(e)}
                        >
                            <i id={ind} className="ml-1 text-base font-extrabold rounded-full bi bi-x text-neutral-800"></i>
                        </button>
                    )}
                </p>
            ))}
        </>
    );
}

export default Tags;
