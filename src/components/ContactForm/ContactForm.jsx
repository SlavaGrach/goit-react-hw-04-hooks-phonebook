import React from 'react';
import PropTypes from 'prop-types';
import style from './contactForm.module.css';

function ContactForm({ name, number, onAddContact, onSetUserInfo }) {
  return (
    <form onSubmit={onAddContact} action="" className={style.input}>
      <label htmlFor="">
        <p>Name</p>
        <input
          onInput={onSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor="">
        <p>Number</p>
        <input
          onInput={onSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={style.submitBtn}>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onSetUserContact: PropTypes.func,
};

export default ContactForm;
