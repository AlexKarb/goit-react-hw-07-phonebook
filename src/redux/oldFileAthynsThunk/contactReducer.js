// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

// import {
//   getAllContacts,
//   saveContact,
//   deleteContact,
// } from './oldFileAthynsThunk/contactsOperation';

// const contactReducer = createReducer([], {
//   [getAllContacts.fulfilled]: (_, action) => action.payload,
//   [saveContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload.id),
// });

// const isLoadingReducer = createReducer(false, {
//   [getAllContacts.pending]: () => true,
//   [getAllContacts.fulfilled]: () => false,
//   [getAllContacts.rejected]: () => false,

//   [saveContact.pending]: () => true,
//   [saveContact.fulfilled]: () => false,
//   [saveContact.rejected]: () => false,

//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [getAllContacts.rejected]: (_, action) => action.payload,
//   [saveContact.rejected]: (_, action) => action.payload,
//   [deleteContact.rejected]: (_, action) => action.payload,
// });

// export const contactCombineReducer = combineReducers({
//   contacts: contactReducer,
//   isLoading: isLoadingReducer,
//   error: errorReducer,
// });

// export const contacts = state => state.contacts.contacts;
