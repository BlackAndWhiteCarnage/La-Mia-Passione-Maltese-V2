/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Home, AboutUs, OurDogs, Exhibitions, Faq, Contact } from '@/sections';

const Root: FC = () => (
	<>
		<Home />
		<AboutUs />
		<OurDogs />
		<Exhibitions />
		<Faq />
		<Contact />
	</>
);

export default Root;
