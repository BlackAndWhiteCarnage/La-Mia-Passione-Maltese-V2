/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { navigationLinks, contactLinks } from '@/config';
import Navigation from '.';

export default {
	title: 'Components/Navigation',
	component: Navigation,
	argTypes: {
		navigationLinks: {
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
} satisfies Meta<typeof Navigation>;

export const Default: StoryObj<typeof Navigation> = {
	args: {
		navigationLinks,
		contactLinks,
	},
};
