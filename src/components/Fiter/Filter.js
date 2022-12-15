import React from 'react';
import PropTypes from 'prop-types';
import { FiltrLabel,FiltrInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FiltrLabel>
    Find contacts by name
    <FiltrInput type="text" value={value} onChange={onChange} />
  </FiltrLabel>
);
Filter.propTypes={
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}