import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton.js';


storiesOf('RadioButton', module)
  .add('default', () => <RadioButton title="Default" labeldisplay="block"/>)
  .add('error', () => <RadioButton title="Error" hasError={true} disabled={true} labeldisplay="block"/>)
  .add('disabled', () => <RadioButton title="Disabled" disabled={true} labeldisplay="none"/>)