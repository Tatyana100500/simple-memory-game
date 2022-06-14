import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
	cards: [{ name: 'red', hidden: false, id: 1 },
	        { name: 'yellow', hidden: false, id: 2 },
		    { name: 'green', hidden: false, id: 3 },
		    { name: 'blue', hidden: false, id: 4 },
		    { name: 'purple', hidden: false, id: 5 },
		    { name: 'brown', hidden: false, id: 6 },
		    { name: 'pink', hidden: false, id: 7 },
		    { name: 'orange', hidden: false, id: 8 },
			{ name: 'pink', hidden: false, id: 9 },
		    { name: 'green', hidden: false, id: 10 },
			{ name: 'brown', hidden: false, id: 11 },
		    { name: 'blue', hidden: false, id: 12 },
			{ name: 'red', hidden: false, id: 13 },
			{ name: 'yellow', hidden: false, id: 14 },
		    { name: 'purple',  hidden: false,id: 15 },
		    { name: 'orange', hidden: false, id: 16 }],
  },
  reducers: {
    addHidden: (state, { payload }) => {
	  state.cards = state.cards.map((card) => {
		if (card.id == payload) {
		  card.hidden = true;
		}
		return(card);
	  });
	},
  },
});

export const {
	addHidden,
} = cardsSlice.actions;

export default cardsSlice.reducer;