/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as FacebookIcon } from '@/icons/facebook.svg';
import LinkedIcon from '.';

export default {
	title: 'Components/LinkedIcon',
	component: LinkedIcon,
	argTypes: {
		icon: {
			table: {
				disable: true,
			},
		},
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
} satisfies Meta<typeof LinkedIcon>;

export const Default: StoryObj<typeof LinkedIcon> = {
	args: {
		icon: FacebookIcon,
		href: '',
	},
};
