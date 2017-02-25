import React, { PropTypes } from 'react';
import { default as Select } from '@ox2/select/SelectField';
import WrapperLabel from '@ox2/ui/WrapperLabel';
/**
 * SelectField Component
 */
const SelectField = ({ input, label, placeholder, ...custom }) => {
  return (
    <WrapperLabel text={label || ''}>
      <Select
        placeholder={placeholder || ''}
        value={input.value}
        onUpdate={(value) => input.onChange(value)}
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
