import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

//selector
export const filter = state => state.filter.filter;

export const { setFilter } = filterSlice.actions;
