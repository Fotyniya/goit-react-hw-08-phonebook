import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul >
      {contacts.map(({ id, contact }) => (
        <li key={id}>
          <Contact id={id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
