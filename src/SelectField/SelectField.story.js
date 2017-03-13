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

const meta = {
  touched: false,
  error: '',
};

const metaError = {
  touched: true,
  error: 'invalid something',
};

storiesOf('SelectField', module)
  .add('single', () => (
    <SelectField
      input={input}
      meta={meta}
      options={Groups}
      placeholder={'Select groups'}
    />
  ))
  .add('with label', () => (
    <SelectField
      input={input}
      label={'My label'}
      meta={meta}
      options={Groups}
      placeholder={'Select groups'}
    />
  ))
  .add('with error', () => (
    <SelectField
      input={input}
      label={'My label'}
      meta={metaError}
      options={Groups}
      placeholder={'Select groups'}
    />
  ))
  .add('multi', () => (
    <SelectField
      input={input}
      meta={meta}
      multi={true}
      options={Groups}
      simpleValue={true}
    />
  ));
