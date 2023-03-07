import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button, Text } from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
