/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Home, AboutUs, OurDogs, Exhibitions } from '@/sections';

const Root: FC = () => (
	<>
		<Home />
		<AboutUs />
		<OurDogs />
		<Exhibitions />
	</>
);

export default Root;
