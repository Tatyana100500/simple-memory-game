import Cards from "./Cards";
import { useSelector } from 'react-redux';
import React from 'react';

const Game = () => {
  const { raunds, hiddens } = useSelector((state) => state.game);
    if (hiddens === 16) {
	  return(<div id="game">
			  <p>Конец игры!</p>
			</div>)
    }
  return (
	<div id="game">
	  <p>{`Раунд: ${raunds}`}</p>
	  <Cards />
	</div>
  )
};
  
export default Game;
