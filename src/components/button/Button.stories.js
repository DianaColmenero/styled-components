import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from './Button.js';


storiesOf('Button', module)
  .add('default', () => <Button title= "Button default" labeldisplay= 'block'/>)
  .add('error', () => <Button title="Button error" labeldisplay="block"/>)
  .add('disabled', () => <Button title="Button disabled" disabled={true} labeldisplay="block"/>)

