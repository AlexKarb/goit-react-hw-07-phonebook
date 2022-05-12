import Section from './module/Utils/Section/Section';
import ContactForm from './module/ContactForm/ContactForm';
import Title from './module/Utils/Title/Title';
import ContactBook from 'module/ContactBook/ContactBook';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <Section type="Phonebook">
        <Title title="Phonebook" />
        <ContactForm />
      </Section>
      <Section>
        <Title title="Contacts" />
        <ContactBook />
      </Section>
    </div>
  );
};
export default App;
