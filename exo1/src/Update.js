import React, {useState} from 'react';

export default function Form({cards, setCards}){
    const [card, setCard] = useState();
    const handleMessage = (message) => {
        setCard( {...card, message} ); //on destructure l'objet card et on lui met la valeur message de l'input du formulaire
    };

    const handleTitre = (titre) => {
        setCard({...card, titre}); //idem que handleMessage
    };

    const handleOption = (option) => {
        setCard({...card, option});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCards = [...cards];
        cards.map((element, i) => {
            if(card.option == element.id){
                newCards[i] = card;
                setCards(newCards);
                console.log(newCards);
                return;
            }
        })
    };

    return(
        <form>
            <input type="text" placeholder="Titre" onChange={(e) => handleTitre(e.target.value)} /> {/* au changement de l'input on appel la fonction créée ci dessus */}
            <input type="text" placeholder="Message" onChange={(e) => handleMessage(e.target.value)}/>
            <select onClick={(e) => handleOption(e.target.value)}>
                {cards.map((card,i) => {
                    return <option key={i} value={card.id}>{card.titre}</option>
                })}
                </select>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Edit</button>
        </form>
    );
}