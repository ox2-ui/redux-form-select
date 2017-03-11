import React from 'react';
import { storiesOf } from '@kadira/storybook';
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

storiesOf('SelectField', module)
  .add('single', () => (
    <SelectField
      input={input}
      options={Groups}
      placeholder={'Select groups'}
    />
  ))
  .add('with label', () => (
    <SelectField
      input={input}
      label={'My label'}
      options={Groups}
      placeholder={'Select groups'}
    />
  ))
  .add('multi', () => (
    <SelectField
      input={input}
      multi={true}
      options={Groups}
      simpleValue={true}
    />
  ));
