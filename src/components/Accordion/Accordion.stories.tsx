/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Accordion from '.';

export default {
	title: 'Components/Accordion',
	component: Accordion,
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {
	args: {
		items: new Array(6).fill({
			label: 'Jaki charakter będzie miał mój Maltańczyk?',
			children: (
				<p className="is-style-p-large">
					Charakteru nie da się tak naprawdę określić, tak samo jak z
					dziećmi. Wszystko zależy od wychowania. Pies w pełni
					fizycznie i emocjonalnie rozwija się do drugiego roku życia.
					Mamy obecnie cztery pieski a każdy to inny świat.
				</p>
			),
		}),
	},
};
