import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import Filter from '../FilterContacts/Filter'
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
 
  const filtredContacts = contacts 
    .filter(item => (item.name).toUpperCase().includes((filter).toUpperCase()));

  return (
    <>
    <Filter/>
    <ul style={{listStyle: 'none', padding: 0 }}>
      {filtredContacts.map(({ id, name, number }) => (
        <li key={id} style={{marginBottom: 10, fontSize: 20 }} >
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
    </>
  );
};
