import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
storiesOf('Card', module).add('Default', () => (
	<Card
		text="lorem "
		pic="http://source.unsplash.com/1600x900/"
		date="2018-02-10T20:16:46+0000"
	/>
));