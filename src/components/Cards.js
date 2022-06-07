import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEmpty, setSelected } from '../slices/cardSlise';
import { removeCards } from '../slices/cardsSlise';
import { addRaund } from '../slices/gameSlice';

function Card (props) {
	const dispatch = useDispatch();
	const clickCard =(e) => {
		const section = e.target.parentElement;
		section.setAttribute('id', props.id);
		section.firstChild.classList.add(`${props.name}`);
		e.target.classList.add('active');
		const setDispatch = () => {
			dispatch(setSelected({id: props.id, name: props.name}));
		}
		setTimeout(setDispatch, 500);
	};
	return (
	  <section className='card'>
		<div className='card front'></div>
		<div onClick={clickCard} className='card back'></div>
	  </section>
	);
  }
const Cards = () => {
	
	let { cards } = useSelector((state) => state.cards);
	let { selected } = useSelector((state) => state.card);
	const dispatch = useDispatch();
	useEffect(() => {
		
		if (selected.length === 2) {
			const card1 = document.getElementById(`${selected[0].id}`);
			const card2 = document.getElementById(`${selected[1].id}`);
			if (selected[0].name === selected[1].name) {
			  dispatch(removeCards(selected[1].id));
			  dispatch(removeCards(selected[0].id));
			  dispatch(setSelectedEmpty());
			  dispatch(addRaund());
			  card1.remove();
			  card2.remove();
			
			} else {
				dispatch(setSelectedEmpty());
				dispatch(addRaund());
				card1.firstChild.classList.add('active');
				card2.firstChild.classList.add('active');
				card1.firstChild.classList.remove('active');
				card2.firstChild.classList.remove('active');
				card1.lastChild.classList.remove('active');
				card2.lastChild.classList.remove('active');
			}
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