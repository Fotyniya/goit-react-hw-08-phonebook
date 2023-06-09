import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { FormLabel, Input, Button } from './ContactEditor.styled';

export default function ContactEditor() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    for (const item of contacts){
      if (item.name === name ){
          alert (`${name} is already in contacts`);
          return; 
      } 
    }
    const contact = { name, number }

      dispatch(addContact(contact));
    
      form.reset();
      return
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
          Name
          <Input 
            type="text" 
            name='name' 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
        </FormLabel>
        <FormLabel>
            Number
            <Input 
              type="tel" 
              name='number' 
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required/>
        </FormLabel>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
