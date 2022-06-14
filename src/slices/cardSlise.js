import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    selected: [],
  },
  reducers: {
    setSelected: (state, { payload }) => {
	  state.selected.push(payload);
	},
	setSelectedEmpty: (state) => {
	  state.selected = [];
	},
  },
});

export const {
  setSelected,
  setSelectedEmpty,
} = cardSlice.actions;

export default cardSlice.reducer;