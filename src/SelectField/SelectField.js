import React, { PropTypes } from 'react';
import { default as Select } from '@ox2/select/SelectField';
import WrapperLabel from '@ox2/forms/WrapperLabel';

/**
 * SelectField Component
 */
const SelectField = ({ input, label, placeholder, ...custom }) => {
  return (
    <WrapperLabel text={label || ''}>
      <Select
        onUpdate={(value) => input.onChange(value)}
        placeholder={placeholder || ''}
        value={input.value}
        {...custom}
      />
    </WrapperLabel>
  );
};

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SelectField;
