import ContactsList from 'module/ContactsList/ContactsList';
import { NoFound } from 'module/Utils/NoFound';
import { Spiner } from 'module/Utils/Spiner/Spiner';
import { useGetAllContactQuery } from 'redux/contacts/contactsQuery';

const ContactBook = () => {
  const { data: allContacts = [], isLoading } = useGetAllContactQuery();

  const haveContact = allContacts.length > 0 && !isLoading;
  const noFoundContact = allContacts.length === 0 && !isLoading;

  return (
    <>
      {noFoundContact && <NoFound text={'No contacts'} />}
      {isLoading && <Spiner />}
      {haveContact && <ContactsList />}
    </>
  );
};

export default ContactBook;
