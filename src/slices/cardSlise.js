import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
	cards: [],
    color: '',
	namber: 0,
    selected: [],
  },
  reducers: {
    
    removeCard: (state, { payload: { namber } }) => {
      state.cards = state.cards.filter((card) => (card.namber !== namber));

    },
  },
});

export const {
  removeCard,
} = cardSlice.actions;

export default cardSlice.reducer;