import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul style={{listStyle: 'none', padding: 0 }}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} style={{marginBottom: 10, fontSize: 20 }} >
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
