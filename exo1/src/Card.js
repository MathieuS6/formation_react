import React from 'react';
import './Card.css';

function Card({card}) {
        return (
        <div className='container'>
            <div className='border'>
                <div>{card.titre}</div>
                <p>{card.message}</p>
            </div>
        </div>
    );
}

export default Card;