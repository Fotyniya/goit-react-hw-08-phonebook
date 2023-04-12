import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ id, contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div >
      <p >{contact}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};