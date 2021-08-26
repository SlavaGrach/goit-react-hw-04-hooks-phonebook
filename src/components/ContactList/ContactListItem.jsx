import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({ onDeleteContact, id, name, number }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact} id={id}>
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
