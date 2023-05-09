/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExhibitionsList from '.';

export default {
	title: 'Components/ExhibitionsList',
	component: ExhibitionsList,
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
	argTypes: {
		exhibitions: {
			table: {
				disable: true,
			},
		},
	},
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
} satisfies Meta<typeof ExhibitionsList>;

const exhibition = {
	dogName: 'Piccolo Perla',
	date: '08.11.2015',
	location: 'Poznań',
	exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
	arbiterName: 'Krystyna Opara',
	grade: 'Bardzo dobra',
	place: 4,
};

export const Default: StoryObj<typeof ExhibitionsList> = {
	args: {
		exhibitions: [
			{
				year: 2015,
				data: new Array(2).fill(exhibition),
			},
			{
				year: 2018,
				data: new Array(3).fill(exhibition),
			},
			{
				year: 2020,
				data: new Array(6).fill(exhibition),
			},
		],
	},
};
