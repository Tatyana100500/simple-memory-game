
import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedEmpty, setSelected } from '../../src/slices/cardSlise';
import { addHidden} from '../../src/slices/cardsSlise';
import { addRaund, addHiddensCount } from '../../src/slices/gameSlice';

function Card (props) {
  const [activeState, setActiveState] = useState(false);
  const { selected } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const clickCard =(e) => {
	setActiveState(true);
	const setDispatch = () => {
	  dispatch(setSelected({id: props.id, name: props.name, active: true}));
	}
	setTimeout(setDispatch, 500);
  };
	
  useEffect(() => {
	if (selected.length === 2) {
	  if (selected[0].name !== selected[1].name) {
		setActiveState(false);
	  }
	}
  },[selected]);
	
  return activeState ? (
	<div id={props.id} className={`card`}>
	  <div onClick={clickCard} className='card-inner active'>
		<div className={`front ${props.name}`}></div>
		<div  className='back'></div>
	  </div>
	</div>
  ) : (
	<div id={props.id} className='card'>
	  <div onClick={clickCard} className='card-inner'>
		<div className={`front ${props.name}`}></div>
		<div  className='back'></div>
	  </div>
	</div>
  );
};

const Cards = () => {
  const { cards } = useSelector((state) => state.cards);
  const { selected } = useSelector((state) => state.card);
  const dispatch = useDispatch();
	
  useEffect(() => {
	if (selected.length === 2) {
	  if (selected[0].name === selected[1].name && selected[0].id !== selected[1].id) {
		dispatch(addHidden(selected[0].id));
		dispatch(addHidden(selected[1].id));
		dispatch(addHiddensCount());
		dispatch(setSelectedEmpty());
		dispatch(addRaund());
	  } else {
		dispatch(setSelectedEmpty());
		dispatch(addRaund());
	  }
    }
  }, [selected, cards]);
  return (
	<div className='container'>
	  {cards.map((card) => {
		const { id, name, hidden } = card;
		  if (!hidden) {
			return (<Card key={id} id={id} name={name}  />);
		  }
		return (<div key={id} className='hidden'></div>)
	  })}
	</div>
  )
};
  
  export default Cards;