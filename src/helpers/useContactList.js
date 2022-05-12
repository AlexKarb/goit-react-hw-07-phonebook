// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getAllContacts,
//   saveContact,
//   deleteContact,
// } from 'redux/oldFileAthynsThunk/contactsOperation';
// import { contacts } from 'redux/contacts/contactStore';

// export const useContactList = () => {
//   const dispatch = useDispatch();
//   const allContacts = useSelector(contacts);

//   useEffect(() => dispatch(getAllContacts()), [dispatch]);

//   const onSave = contact => {
//     dispatch(saveContact(contact));
//   };

//   const onDelete = id => {
//     dispatch(deleteContact(id));
//   };

//   return { allContacts, onSave, onDelete };
// };
