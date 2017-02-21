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

it('renders correctly', () => {
  const wrapper = mount(
    <SelectField
      input={input}
      options={Groups}
      placeholder={'Select groups'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
