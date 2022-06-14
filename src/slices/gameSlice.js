import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    raunds: 1,
	hiddens: 0,
  },
  reducers: {
    addRaund: (state) => {
      state.raunds += 1;
    },
	addHiddensCount: (state) => {
	  state.hiddens += 2;
	},
  },
});

export const { addRaund, addHiddensCount } = gameSlice.actions;

export default gameSlice.reducer;