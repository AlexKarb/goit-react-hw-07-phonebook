// import {
//   getAllContactsApi,
//   postNewContactApi,
//   deleteContactApi,
// } from 'redux/oldFileAthynsThunk/api-service';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getAllContacts = createAsyncThunk(
//   'contacts/getAllContacts',
//   async () => await getAllContactsApi()
// );

// export const saveContact = createAsyncThunk(
//   'contacts/createNewContact',
//   async contact => await postNewContactApi(contact)
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => await deleteContactApi(id)
// );

// export const getContacts = () => dispatch => {
//   dispatch(getAllContactsAction.getRequest());

//   getAllContactsApi()
//     .then(allcontacts => dispatch(getAllContactsAction.getSuccess(allcontacts)))
//     .catch(error => dispatch(getAllContactsAction.getError(error)));
// };

// export const saveContact = contact => dispatch => {
//   dispatch(createNewContactAction.createRequest());

//   postNewContactApi(contact)
//     .then(contact => dispatch(createNewContactAction.createSuccess(contact)))
//     .catch(error => dispatch(createNewContactAction.createError(error)));
// };

// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactAction.deleteRequest());

//   deleteContactApi(id)
//     .then(() => dispatch(deleteContactAction.deleteSuccess(id)))
//     .catch(error => dispatch(deleteContactAction.deleteError(error)));
// };
