import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEmpty, setSelected } from '../../src/slices/cardSlise';
import { removeCards } from '../../src/slices/cardsSlise';
import { addRaund } from '../../src/slices/gameSlice';

function Card (props) {
	const dispatch = useDispatch();
	const clickCard =(e) => {
		const section = e.target.parentElement;
		if(section.className === 'card-inner') {
		section.setAttribute('id', props.id);
		section.classList.add('active');
		const setDispatch = () => {
			dispatch(setSelected({id: props.id, name: props.name}));
		}
		setTimeout(setDispatch, 500);
	  }
	};
	return (
	  <div onClick={clickCard} className='card'>
		<div className='card-inner'>
		  <div className={`front ${props.name}`}></div>
		  <div  className='back'></div>
		</div>
	  </div>
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
			if (selected[0].name === selected[1].name && selected[0].id !== selected[1].id) {
			  dispatch(removeCards(selected[1].id));
			  dispatch(removeCards(selected[0].id));
			  dispatch(setSelectedEmpty());
			  dispatch(addRaund());
			  card1.remove();
			  card2.remove();
			
			} else {
				dispatch(setSelectedEmpty());
				dispatch(addRaund());
				card1.classList.remove('active');
				card2.classList.remove('active');
			}
		}
	},[selected, cards]);

	return (
	  <div className='container'>
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