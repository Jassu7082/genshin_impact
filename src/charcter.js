import React, { useState } from "react";

function Character(props) {
    
    return (
        <div >
            <img className="bg-[#bb7c45] cover h-full w-full" src={props.image} alt={props.name} />
        </div>
    );
}

export default Character;