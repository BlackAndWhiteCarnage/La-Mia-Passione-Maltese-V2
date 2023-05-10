/**
 * External dependencies
 */
import { ArgsStoryFn } from '@storybook/types';
import { ReactRenderer, StoryObj, Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { ComponentProps } from 'react';

/**
 * Internal dependencies
 */
import AccordionItem from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/AccordionItem',
	component: AccordionItem,
	argTypes: {
		children: disable,
		onToggle: disable,
	},
	excludeStories: ['DefaultProps'],
} satisfies Meta<typeof AccordionItem>;

const AccordionItemStory: ArgsStoryFn<
	ReactRenderer,
	ComponentProps<typeof AccordionItem>
> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<AccordionItem
			{...args}
			onToggle={(isOpen) => updateArgs({ ...args, isOpen })}
		/>
	);
};

export const DefaultProps = {
	label: 'Jaki charakter będzie miał mój Maltańczyk?',
	children: (
		<p className="is-style-p-large">
			Charakteru nie da się tak naprawdę określić, tak samo jak z dziećmi.
			Wszystko zależy od wychowania. Pies w pełni fizycznie i emocjonalnie
			rozwija się do drugiego roku życia. Mamy obecnie cztery pieski a
			każdy to inny świat.
		</p>
	),
};

export const Default: StoryObj<typeof AccordionItem> = {
	render: AccordionItemStory,
	args: DefaultProps,
};
