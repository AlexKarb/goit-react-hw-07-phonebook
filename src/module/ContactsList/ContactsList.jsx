import SearchForm from '../SearchForm/SearchForm';
import ContactItem from '../ContactItem/ContactItem';
import { useFilter } from 'helpers/useFilter';
import { NoFound } from 'module/Utils/NoFound';
// import PropTypes from 'prop-types';

const ContactsList = () => {
  const { filteringList } = useFilter();
  const haveContact = filteringList.length > 0;

  return (
    <>
      <SearchForm />

      {haveContact && (
        <ul>
          <ContactItem />
        </ul>
      )}

      {!haveContact && <NoFound text={'No found contacts'} />}
    </>
  );
};

export default ContactsList;

// ContactsList.propTypes = {
//   // contactsList: PropTypes.array.isRequired,
//   filter: PropTypes.string,
//   onDelete: PropTypes.func.isRequired,
// };
