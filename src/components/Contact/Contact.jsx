import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { SlClose } from "react-icons/sl";

export default function Contact ({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "#DCEDC8", color: "#33691E" }}>
      <p style={{marginLeft: 10}}>{name}: {number}</p>
      <button 
        type="button" 
        onClick={handleDelete}
        style={{borderColor: "transparent", backgroundColor: "transparent", cursor: "pointer" }}>
        <SlClose size={24} style={{fill: "#33691E"}} />
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}