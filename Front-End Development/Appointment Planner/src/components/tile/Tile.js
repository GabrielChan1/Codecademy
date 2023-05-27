import React from 'react';

export const Tile = (props) => {
    return (
        <div className='tile-container'>
            <p className='tile-title'>{props.name}</p>
            {props.description.map(info => <p className='tile'>{info}</p>)}
        </div>
    );
};
