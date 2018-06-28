import React from 'react';
import { storiesOf } from '@storybook/react';
import DropDown from './DropDown.js';


storiesOf('DropDown', module)
  .add('default', () => <DropDown title= "Default" labeldisplay= 'block'/>)
  .add('error', () => <DropDown title="Error" hasError={true} disabled={true} labeldisplay="block"/>)
  .add('disabled', () => <DropDown title="Disabled" disabled={true} labeldisplay="none"/>)