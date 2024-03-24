import React from "react";

function Character({ name, image, onMouseEnter }) {
    return (
        <div onMouseEnter={onMouseEnter}>
            <img className="bg-[#bb7c45] cover h-full w-full" src={image} alt={name} />
        </div>
    );
}

export default Character;
