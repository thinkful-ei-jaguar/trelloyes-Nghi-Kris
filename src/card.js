import React from 'react';

export function createCare(props) {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}