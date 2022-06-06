import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './slices/cardSlise.js';
import cardsReducer from './slices/cardsSlise.js';
import gameReducer from './slices/gameSlice.js';


export default configureStore({
  reducer: {
    card: cardReducer,
	cards: cardsReducer,
	game: gameReducer,
  },
});