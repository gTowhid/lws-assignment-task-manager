import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import tasksSliceReducer from '../features/tasks/tasksSlice';
import projectsSliceReducer from '../features/projects/projectsSlice';
import membersSliceReducer from '../features/members/membersSlice';
import filterSliceReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    tasks: tasksSliceReducer,
    projects: projectsSliceReducer,
    members: membersSliceReducer,
    filter: filterSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
