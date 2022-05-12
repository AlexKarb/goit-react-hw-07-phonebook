import {
  useGetAllContactQuery,
  useSaveNewContactMutation,
} from 'redux/contacts/contactsQuery';
import finderName from './finderName';
import { normalizeContact } from './normalizeContact';
import { notify } from './notify';

export const useCreateNewContact = () => {
  const { data: allContacts = [] } = useGetAllContactQuery();

  const [onSave] = useSaveNewContactMutation();

  const createContact = async contact => {
    try {
      const checkedContact = await finderName(
        allContacts,
        normalizeContact(contact)
      );
      onSave(checkedContact);
      notify({ name: contact.name, type: 'create' });
    } catch (error) {
      notify({ name: contact.name, type: 'error' });
    }
  };

  return { createContact };
};
