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

export const Default: StoryObj<typeof ExhibitionsList> = {
	args: {
		exhibitions: [
			{
				year: 2015,
				data: [
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2015',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2015',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
				],
			},
			{
				year: 2018,
				data: [
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2018',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
				],
			},
			{
				year: 2020,
				data: [
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2018',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2018',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
					{
						dogName: 'Piccolo Perla',
						date: '08.11.2018',
						location: 'Poznań',
						exhibitionName: 'Międzynarodowa Wystawa Psów Rasowych',
						arbiterName: 'Krystyna Opara',
						grade: 'Bardzo dobra',
						place: 4,
					},
				],
			},
		],
	},
};
