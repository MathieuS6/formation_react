import React, {useState} from 'react';

export default function Form({tasks, setTasks}){
    const [task, setTask] = useState();

    const handleMessage = (desc) => {
        setTask( {...task, desc} ); //on destructure l'objet card et on lui met la valeur message de l'input du formulaire
    };

    const handleTitre = (titre) => {
        setTask({...task, titre}); //idem que handleMessage
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //annule le comportement par défaut de l'event
        let newTasks = [...tasks]; //on clone le tableau cards de App.js
        let id = newTasks.length+1;
        newTasks.push({...task, id}); //on push un nouvel attribut rempli précédemment
        setTasks(newTasks); //on re-render la collection de carte car celle-ci a été modifiée*
    };

    return(
        <form className="my-5 text-center">
            <input className="form-control mb-3" type="text" placeholder="Titre" onChange={(e) => handleTitre(e.target.value)} /> {/* au changement de l'input on appel la fonction créée ci dessus */}
            <input className="form-control mb-3" type="text" placeholder="Message" onChange={(e) => handleMessage(e.target.value)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
        </form>
    );
}