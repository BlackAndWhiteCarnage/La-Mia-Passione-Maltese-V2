/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Home, AboutUs, OurDogs, Exhibitions, Faq } from '@/sections';

const Root: FC = () => (
	<>
		<Home />
		<AboutUs />
		<OurDogs />
		<Exhibitions />
		<Faq />
	</>
);

export default Root;
