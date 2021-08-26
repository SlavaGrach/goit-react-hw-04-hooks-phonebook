import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            onDeleteContact={onDeleteContact}
            id={id}
            name={name}
            number={number}
            key={id}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
