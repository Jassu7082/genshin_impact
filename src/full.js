import React from 'react';

function Full(props) {
    return (
        <div>
            <img className='cover w-full h-full border' src={props.image} alt="refresh" />
            <h1 className='text-white text-center text-6xl'>{props.name}</h1>
        </div>
    );
}

export default Full;