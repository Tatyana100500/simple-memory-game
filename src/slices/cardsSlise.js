import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
	cards: [{ name: 'red', id: 1 },
	        { name: 'yellow', id: 2 },
		    { name: 'green', id: 3 },
		    { name: 'blue', id: 4 },
		    { name: 'purple', id: 5 },
		    { name: 'brown', id: 6 },
		    { name: 'pink', id: 7 },
		    { name: 'orange', id: 8 },
			{ name: 'pink', id: 9 },
		    { name: 'green', id: 10 },
			{ name: 'brown', id: 11 },
		    { name: 'blue', id: 12 },
			{ name: 'red', id: 13 },
			{ name: 'yellow', id: 14 },
		    { name: 'purple', id: 15 },
		    { name: 'orange', id: 16 }],
  },
  reducers: {
    removeCards: (state, { payload }) => {
	  
      state.cards = state.cards.filter((card) => {
		console.log(card.id, payload);
		  return (card.id != payload)});
	  console.log(state.cards);
    },
  },
});

export const {
  removeCards,
} = cardsSlice.actions;

export default cardsSlice.reducer;