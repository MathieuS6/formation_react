import React, {useState} from 'react';

export default function Form({cards, setCards}){
    const [card, setCard] = useState();

    const handleOption = (option) => {
        setCard({...card, option});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCards = [...cards];
        cards.map((element, i) => {
            if(card.option == element.id){
                newCards.splice(i, 1);
                setCards(newCards);
                return;
            }
        })
    };

    return(
        <form>
            <select onClick={(e) => handleOption(e.target.value)}>
                {cards.map((card,i) => {
                    return <option key={i} value={card.id}>{card.titre}</option>
                })}
                </select>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Delete</button>
        </form>
    );
}