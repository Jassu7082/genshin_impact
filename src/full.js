import React from 'react';

function Full(props) {
    return (
        <div>
            <img className='cover w-full h-full border' src={props.image} alt="refresh" />
        </div>
    );
}

export default Full;