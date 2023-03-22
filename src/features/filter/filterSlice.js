import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: [
    'Scoreboard',
    'Flight Booking',
    'Product Cart',
    'Book Store',
    'Blog Application',
    'Job Finder',
  ],
  searchTerm: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAdded: (state, action) => {
      state.filter = [...state.filter, action.payload];
    },
    filterRemoved: (state, action) => {
      state.filter = state.filter.filter((el) => el !== action.payload);
    },
    searched: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { filterAdded, filterRemoved, searched } = filterSlice.actions;
export default filterSlice.reducer;
