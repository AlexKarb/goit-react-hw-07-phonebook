import { configureStore } from '@reduxjs/toolkit';
import { contactQuery } from 'redux/contacts/contactsQuery';
import { filterSlice } from 'redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [contactQuery.reducerPath]: contactQuery.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactQuery.middleware,
  ],
});
