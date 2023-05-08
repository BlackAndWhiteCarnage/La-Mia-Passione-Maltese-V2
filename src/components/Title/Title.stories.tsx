/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import Title from '.';

export default {
	title: 'Components/Title',
	component: Title,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '100rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Title>;

export const Default: StoryObj<typeof Title> = {
	args: {
		title: 'La Mia Passione Maltese',
	},
};
