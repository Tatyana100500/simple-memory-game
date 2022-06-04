import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    raunds: [],
  },
  reducers: {
    addRaund: (state, { payload: { round } }) => {
      state.raunds.push(round);
    },
  },
});

export const { addRaund } = gameSlice.actions;

export default gameSlice.reducer;