import React from 'react';
 import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList, ContactListItem ,FiltrSubmitBtn } from './ContactList.styled';

export function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} />
          <FiltrSubmitBtn type="button" onClick={() => onDeleteContact(contact.id)}>
            Удалить
          </FiltrSubmitBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired,
     })),
    onDelete: PropTypes.func,
};