import Button from '../Utils/Button/Button';
import ContactData from './ContactData';
import style from './ContactItem.module.css';
import { TiUserDelete } from 'react-icons/ti';
import { useDeleteContactMutation } from 'redux/contacts/contactsQuery';
import { useFilter } from 'helpers/useFilter';
import { SpinerDots } from 'module/Utils/Spiner/SpinerDots';
const { contact__item } = style;

const Contact = () => {
  const [onDelete, { isLoading: isDeliting }] = useDeleteContactMutation();
  const { filteringList } = useFilter();

  return (
    <>
      {filteringList.map(({ id, name, phone, photo }) => (
        <li key={id} className={contact__item}>
          <ContactData name={name} phone={phone} photo={photo} />

          <Button
            styleFor="delete"
            onClick={() => {
              onDelete(id);
            }}
            text={<TiUserDelete />}
          />
          {isDeliting && <SpinerDots />}
        </li>
      ))}
    </>
  );
};

export default Contact;

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
