import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormCard, Label, Input, Button } from './Form.styled';

export default function Form({ addContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = { id: nanoid(), name: name, number: number };

    addContacts(newUser);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          id={nameId}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberId}>
        Number
        <Input
          type="tel"
          value={number}
          onChange={handleChange}
          id={numberId}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormCard>
  );
}


Form.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

