import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button.js';


storiesOf('Button', module)
  .add('default', () => <Button title= "Default" labeldisplay= 'block'/>)
  .add('error', () => <Button title="Error" hasError={true} disabled={true} labeldisplay="block"/>)
  .add('disabled', () => <Button title="Disabled" disabled={true} labeldisplay="none"/>)

