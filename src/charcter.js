import React, { useState } from "react";

function Character(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img class="bg-gold h-86 w-90" src={props.image} alt={props.name} />
            {isHovered && (
                <div className="hover-box" style={{ zIndex: 1 }}>
                    {props.name}
                </div>
            )}
        </div>
    );
}

export default Character;