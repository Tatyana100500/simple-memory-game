import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    raunds: 1,
  },
  reducers: {
    addRaund: (state) => {
      state.raunds += 1;
    },
  },
});

export const { addRaund } = gameSlice.actions;

export default gameSlice.reducer;