import Card from "./Card";
import { useSelector, useDispatch } from 'react-redux';

const Game = () => {
	
	return (
		<div className="container">
		<div className="row">
		  <Card>
			<p>1 карточка</p>
		  </Card>
		  <Card>
			<p>2 карточка</p>
		  </Card>
		  <Card>
			<p>3 карточка</p>
		  </Card>
		  <Card>
			<p>4 карточка</p>
		  </Card>
		</div>
		<div className="row">
			<Card>
			  <p>5 карточка</p>
			</Card>
			<Card>
			  <p>6 карточка</p>
			</Card>
			<Card>
			  <p>7 карточка</p>
			</Card>
			<Card>
			  <p>8 карточка</p>
			</Card>
		  </div>
		  <div className="row">
			<Card>
			  <p>9 карточка</p>
			</Card>
			<Card>
			  <p>10 карточка</p>
			</Card>
			<Card>
			  <p>11 карточка</p>
			</Card>
			<Card>
			  <p>12 карточка</p>
			</Card>
		  </div>
		  <div className="row">
			<Card>
			  <p>13 карточка</p>
			</Card>
			<Card>
			  <p>14 карточка</p>
			</Card>
			<Card>
			  <p>15 карточка</p>
			</Card>
			<Card>
			  <p>16 карточка</p>
			</Card>
		  </div>
	  </div>
	)
  };
  
  export default Game;