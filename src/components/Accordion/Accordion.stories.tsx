/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { DefaultProps as AccordionItemProps } from '@/components/AccordionItem/AccordionItem.stories';
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
			...AccordionItemProps,
		}),
	},
};
