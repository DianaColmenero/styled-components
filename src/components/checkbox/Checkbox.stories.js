import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox.js';


storiesOf('Checkbox', module)
  .add('default', () => <Checkbox title="Default" labeldisplay="block"/>)
  .add('error', () => <Checkbox title="Error" hasError={true} labeldisplay="block"/>)
  .add('disabled', () => <Checkbox title="Disabled" disabled={true} labeldisplay="none"/>)