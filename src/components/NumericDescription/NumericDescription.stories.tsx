/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import ExampleImage from '@/images/about-me-3.png';
import NumericDescription from '.';

export default {
	title: 'Components/NumericDescription',
	component: NumericDescription,
	argTypes: {
		image: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					margin: 'auto',
					maxWidth: '87.5rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof NumericDescription>;

const defaultArgs = {
	image: {
		src: ExampleImage,
		alt: '',
	},
	description:
		'Po 12-14 dniach gdy otworzą oczy i zaczynają słyszeć, rozpoczynamy stymulację dźwiękową która trwa do 12 tygodnia życia. W czwartym tygodniu zaczynamy się czesać, myć i suszyć. Zapraszam na mój profil na Facebooku, gdzie można zobaczyć skrawki naszego życia, obejżeć śmieszne momenty naszych maluchów, jak również poczytać o wielu ciekawostkach dotyczących rasy.',
};

export const Odd: StoryObj<typeof NumericDescription> = {
	args: {
		...defaultArgs,
		number: 3,
	},
};

export const Even: StoryObj<typeof NumericDescription> = {
	args: {
		...defaultArgs,
		number: 2,
	},
};
