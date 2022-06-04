//import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Card = () => {
	const { cards } = useSelector((state) => state.cards);
	console.log(cards);
	const dispatch = useDispatch();
	const clickCard =() => {

	};
	return (
	  <section >
        <div onClick={clickCard} className='card'>
		<div className='side front'></div>
		<div className='side back'>
		</div>
        </div>
	  </section>
	)
  };
  
  export default Card;