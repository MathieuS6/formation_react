import React, {useState} from 'react';

export default function Form({cards, setCards}){
    const handleSubmit = (e) => {
        e.preventDefault();
        let newCard = [...cards];
        newCard.push(cards);
        setCards(newCard);
    }

    const handleMessage = (e) => {
        

    }

    return(
        <form>
            <input type="text" placeholder="Titre"/>
            <input type="text" placeholder="Message" onChange={(e) => handleMessage(e)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
        </form>
    );
}