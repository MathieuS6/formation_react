import React from 'react';
import './Card.css';

function CreateCard(props) {
        return (
        <div className='container'>
            <div className='border'>
                <div>{props.titre}</div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default CreateCard;