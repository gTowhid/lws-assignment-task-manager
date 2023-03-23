import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: [],
  searchTerm: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // this reducer is made to ensure all projects are default selected on page load
    // as hooks cannot be used outside a functional component, this reducer is created and this 'filterInitialized'
    // action is dispatched from 'ProjectsList' component once that (projectlist) component is done fetching
    // all the projects from the server. Once all projects are available here in this action.payload,
    // each 'projectName' is gradually injected into the filter array
    filterInitialized: (state, action) => {
      const projects = action.payload;
      if (projects.length > 0)
        projects.map((project) =>
          state.filter.includes(project.projectName)
            ? null
            : state.filter.push(project.projectName)
        );
    },
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

export const { filterAdded, filterRemoved, searched, filterInitialized } =
  filterSlice.actions;
export default filterSlice.reducer;
