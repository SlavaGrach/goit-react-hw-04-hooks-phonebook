import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';
import ContactList from './components/ContactList/ContactList';
import filterContacts from './helpers/filterContacts';
import { useLocaleStorage } from './hooks/useLocalStorage';

export default function App() {
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useLocaleStorage('contacts', []);

  const handleSetUserInfo = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        break;
    }
  };

  const handleAddContact = evt => {
    evt.preventDefault();
    if (contacts.some(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    const id = uuidv4();

    setContacts(contacts => {
      return [...contacts, { id, name, number }];
    });

    setName('');
    setNumber('');
  };

  const handleDeleteContacts = evt => {
    setContacts(contacts => contacts.filter(el => el.id !== evt.target.id));
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onAddContact={handleAddContact}
        onSetUserInfo={handleSetUserInfo}
      ></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter
        filretValue={filter}
        onSetFilter={handleChangeFilter}
      ></ContactFilter>
      <ContactList
        onDeleteContact={handleDeleteContacts}
        contacts={filterContacts(contacts, filter)}
      ></ContactList>
    </div>
  );
}
