import { Formik, Field, Form } from 'formik';
// import PropTypes from 'prop-types';
import schema from '../../helpers/validationForm';
import Button from '../Utils/Button/Button';
import style from './ContactForm.module.css';
import Error from './ErrorMessage';
import { useCreateNewContact } from 'helpers/useCreateNewContact';
const { phonebook, phonebook__label, phonebook__input } = style;

const ContactForm = () => {
  const { createContact } = useCreateNewContact();
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={async (value, { resetForm }) => {
        await createContact(value);
        resetForm();
      }}
    >
      <Form className={phonebook}>
        <label className={phonebook__label}>
          Name
          <Field className={phonebook__input} type="text" name="name" />
          <Error name="name" />
        </label>

        <label className={phonebook__label}>
          Number
          <Field className={phonebook__input} type="tel" name="phone" />
          <Error name="phone" />
        </label>
        <Button type="submit" styleFor="submit" text={'Add contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   allContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onSubmit: PropTypes.func.isRequired,
// };
