/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectField from './SelectField';

const Groups = [
  { label: 'Speakers', value: 'speakers' },
  { label: 'Attendies', value: 'attendies' },
  { label: 'Moderators', value: 'moderators' },
];

const input = {
  value: 'speakers',
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

const meta = {
  touched: false,
  error: '',
};

const metaError = {
  touched: true,
  error: 'invalid something',
};

it('renders correctly', () => {
  const wrapper = mount(
    <SelectField
      input={input}
      meta={meta}
      options={Groups}
      placeholder={'Select groups'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with label', () => {
  const wrapper = mount(
    <SelectField
      input={input}
      label={'My label'}
      meta={meta}
      options={Groups}
      placeholder={'Select groups'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with error', () => {
  const wrapper = mount(
    <SelectField
      input={input}
      label={'My label'}
      meta={metaError}
      options={Groups}
      placeholder={'Select groups'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
