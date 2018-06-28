import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input.js';


storiesOf('Input', module)
  .add('default', () => <Input title="Input default" placeholder="Text" labeldisplay="block"/>)
  .add('with value', () => <Input title="Input with value" value="Lorem ipsum" labeldisplay="block"/>)
  .add('error', () => <Input title="Input error" hasError={true} disabled={true} placeholder="Error" labeldisplay="block"/>)
  .add('disabled', () => <Input title="Input disabled" disabled={true} placeholder="Disabled" labeldisplay="none"/>);