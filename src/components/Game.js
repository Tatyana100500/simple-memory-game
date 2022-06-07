import Cards from "./Cards";
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const Game = () => {
	let { raunds } = useSelector((state) => state.game);
	let { cards } = useSelector((state) => state.cards);
	
	useEffect(() => {
		if (cards.length === 0) {
			const game = document.getElementById('game');
			game.firstChild.textContent = "Конец игры!";
			}
	}, [cards])
	
	return (
	  <div id="game">
		<p>{`Раунд: ${raunds}`}</p>
		<Cards />
	  </div>
	)
  };
  
  export default Game;