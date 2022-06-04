import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './slices/cardSlise.js';
import gameReducer from './slices/gameSlice.js';


export default configureStore({
  reducer: {
    cards: cardReducer,
	game: gameReducer,
  },
});