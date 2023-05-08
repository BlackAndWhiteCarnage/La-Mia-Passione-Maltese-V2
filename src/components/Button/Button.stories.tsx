/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ButtonProps } from './Button';
import Button from '.';

export default {
	title: 'Components/Button',
	component: Button,
} satisfies Meta<typeof Button>;

const DefaultProps: ButtonProps = {
	children: 'Click here!',
};

export const Default: StoryObj<typeof Button> = {
	args: {
		...DefaultProps,
	},
};

export const Anchor: StoryObj<typeof Button> = {
	args: {
		...DefaultProps,
		href: 'https://www.google.pl/',
		target: '_blank',
	},
};
