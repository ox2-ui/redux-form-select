import React, { PropTypes } from 'react';
import Select from '@ox2/select/Select';

/**
 * SelectField Component
 */
const SelectField = ({ input, ...custom }) => {
  return (
    <Select
      value={input.value}
      onUpdate={(value) => input.onChange(value)}
      {...custom}
    />
  );
};

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
};

export default SelectField;
