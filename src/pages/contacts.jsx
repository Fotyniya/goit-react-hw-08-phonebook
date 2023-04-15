import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from 'components/ContactList/ContactList';
import ContactEditor from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

import { SubTitle } from './pages.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SubTitle>Your Contacts</SubTitle>
      <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
