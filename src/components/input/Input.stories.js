import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input.js';


storiesOf('Input', module)
  .add('default', () => <Input title="Input default" placeholder="text"/>)
  .add('with value', () => <Input title="Input with value" value="Lorem ipsum" />)
  .add('error', () => <Input title="Input error" hasError={true} value="Lorem ipsum" />)
  .add('disabled', () => <Input title="Input disabled" disabled={true} value="Lorem ipsum" />);