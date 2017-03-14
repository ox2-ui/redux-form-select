import React, { PropTypes } from 'react';
import { default as Select } from '@ox2/select/SelectField';
import WrapperLabel from '@ox2/field-ui/WrapperLabel';
import ErrorLabel from '@ox2/field-ui/ErrorLabel';

/**
 * SelectField Component
 */
const SelectField = ({ input, label, meta: { touched, error }, placeholder, ...custom }) => {
  return (
    <WrapperLabel labelStyle={{paddingBottom: '3px'}} text={label || ''}>
      <Select
        hasError={touched && error ? true : false} // eslint-disable-line no-unneeded-ternary
        onUpdate={(value) => input.onChange(value)}
        placeholder={placeholder || ''}
        value={input.value}
        {...custom}
      />
      { touched && error &&
        <ErrorLabel style={{paddingTop: '5px'}} text={error} />
      }
    </WrapperLabel>
  );
};

SelectField.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.object.isRequired,
  /**
   * Input label text
   */
  label: PropTypes.string,
  /**
   * [redux-form] The props under the meta key are metadata about the state of this field that redux-form is tracking for you.
   */
  meta: PropTypes.any,
  /**
   * Input placeholder text
   */
  placeholder: PropTypes.string,
};

export default SelectField;
