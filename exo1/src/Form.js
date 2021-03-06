import React, {useState} from 'react';

export default function Form({cards, setCards}){
    const [card, setCard] = useState();

    const handleMessage = (message) => {
        setCard( {...card, message} ); //on destructure l'objet card et on lui met la valeur message de l'input du formulaire
    };

    const handleTitre = (titre) => {
        setCard({...card, titre}); //idem que handleMessage
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //annule le comportement par défaut de l'event
        let newCards = [...cards]; //on clone le tableau cards de App.js
        let id = cards.length;
        newCards.push({...card, id}); //on push un nouvel attribut rempli précédemment
        setCards(newCards); //on re-render la collection de carte car celle-ci a été modifiée*
    };

    return(
        <form>
            <input type="text" placeholder="Titre" onChange={(e) => handleTitre(e.target.value)} /> {/* au changement de l'input on appel la fonction créée ci dessus */}
            <input type="text" placeholder="Message" onChange={(e) => handleMessage(e.target.value)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
        </form>
    );
}