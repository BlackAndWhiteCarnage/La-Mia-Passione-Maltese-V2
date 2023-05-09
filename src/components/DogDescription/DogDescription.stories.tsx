/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import DogDescription from '.';
import ExampleImage from "@/images/bacio-d'amore.png";

export default {
	title: 'Components/DogDescription',
	component: DogDescription,
	argTypes: {
		image: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof DogDescription>;

export const Default: StoryObj<typeof DogDescription> = {
	args: {
		image: {
			src: ExampleImage,
			alt: '',
		},
		title: 'Baccio D`Amore',
		description:
			'Baby to nasza najmłodsza pociecha. Jaka jest z charakteru? To wykapana mama (Piccolo Perla) czyli radosna, energiczna i zawsze znajdująca czas na zabawę sunia. Mimo tego, że jest młodziutka, już jeździmy z nią na wystawy, na których osiąga same sukcesy. Jest niezwykle ułożona po mamie, po prostu ideał wśród Maltańczyków. Jej charakter jest idealny dla starszych dzieci, dorosłych jak i dla wymagającego hodowcy. Życzę każdemy psa z tak elastycznym usposobieniem.',
	},
};
