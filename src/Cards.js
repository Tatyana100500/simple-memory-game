import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEmpty, setSelected } from './slices/cardSlise';
import {  removeCards } from './slices/cardsSlise'
//import Card from './Card';
function Card (props) {
	
	const dispatch = useDispatch();
	const clickCard =(e) => {
		const section = e.target.parentElement;
		const front = section.firstChild;
		front.className = `${front.className} ${props.name}`;
		console.log(front.className);
		const newClass = `${e.target.className} active`;
		e.target.className = newClass;
		//state.selected.push({id: props.id, name: props.name});
		dispatch(setSelected({id: props.id, name: props.name}));
		//setState({id: props.id, name: props.name});
		
		//state.selected = selected.push(id);
	};
	return (
	  <section className='card'>
		<div className='card front'></div>
		<div onClick={clickCard} className='card back'></div>
	  </section>
	);
  }
const Cards = (props) => {
	
	let { cards } = useSelector((state) => state.cards);
	let { selected } = useSelector((state) => state.card);
	const dispatch = useDispatch();
	//const [ selectedIsTwo, setStateSelected ] = useState(false);
	console.log(selected.length);
	useEffect(() => {

		if (selected.length === 2) {
			
			if (selected[0].name === selected[1].name) {
				
			  dispatch(removeCards(selected[1].id));
			  dispatch(removeCards(selected[0].id));
			  dispatch(setSelectedEmpty());
				//cards = cards.filter((card) => (card.id !== selected[0].id));
				console.log('yes', cards);
			
			} else {
				//selected = [];
				dispatch(setSelectedEmpty());
				console.log('no', selected);
				
			}
			//dispatch(setStateSelected(true));
		}
},[selected, cards]);

	return (
	  <div>
		<div className="row">
		  <Card id='1' name='red' />
	      <Card id='2' name='yellow' />
		  <Card id='3' name='green' />
		  <Card id='4' name='blue' />
		</div>
		<div className="row">
		  <Card id='5' name='purple' />
	      <Card id='6' name='brown' />
		  <Card id='7' name='pink' />
		  <Card id='8' name='orange' />	
		</div>
		<div className="row">
		  <Card id='9' name='pink' />
	      <Card id='10' name='green' />
		  <Card id='11' name='brown' />
		  <Card id='12' name='blue' />	
		</div>
		<div className="row">
		  <Card id='13' name='red' />
	      <Card id='14' name='yellow' />
		  <Card id='15' name='purple' />
		  <Card id='16' name='orange' />
		</div>
	  </div>
	)
  };
  
  export default Cards;