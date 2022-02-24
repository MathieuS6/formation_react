import React from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';
import { useState } from "react";
import Update from './Update';
import Delete from './Delete';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

	const cardsInit = [
		{titre: "Card One", message: "Text One", id: "1"},
		{titre: "Card Two", message: "Text Two", id: "2"},
		{titre: "Card Three", message: "Text Three", id: "3"}
	];
	
	const [cards, setCards] = useState(cardsInit);
	return (
		<div className="container my-5">
			<Form cards={cards} setCards={setCards} />
			{cards.map((card, i) => { //map = foreach => renvoie un nouveau tableau a partir des valeurs d'un ancien tableeau
				return <Card key={i} card={card} />
			})}
			<Update cards={cards} setCards={setCards} />
			<Delete cards={cards} setCards={setCards} />
		</div>);
}