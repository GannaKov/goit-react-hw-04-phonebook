import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemSpan } from './ContactItem.styled';

export function ContactItem({ contact: { name, number } }) {
  return (
    <>
      <ContactItemSpan>
        {name}: {number}
      </ContactItemSpan>
    </>
  );
}

ContactItem.propTypes={
  contacts: PropTypes.arrayOf(
    PropTypes.shape({  
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};