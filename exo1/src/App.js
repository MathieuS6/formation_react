import React from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';
import {useState} from "react";

export default function App(){
  
  const cardsInit = [
    {titre: "Card One", message: "Text One"},
    {titre: "Card Two", message: "Text Two"},
    {titre: "Card Three", message: "Text Three"}
  ];

  const [cards, setCards] = useState(cardsInit);
    return (
      <div className="container my-5">
        <Form cards={cards} setCards={setCards}/>
        {cards.map((card) => { //renvoie un nouveau tableau a partir des valeurs d'un ancien tableeau
          return <Card card={card}/>
    })}
      </div>);
  }