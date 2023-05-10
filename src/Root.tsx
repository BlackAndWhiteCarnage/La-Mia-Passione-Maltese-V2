/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import {
	Home,
	AboutUs,
	OurDogs,
	Exhibitions,
	Faq,
	Contact,
	PurchaseProcess,
} from '@/sections';

const Root: FC = () => (
	<>
		<Home />
		<AboutUs />
		<OurDogs />
		<Exhibitions />
		<PurchaseProcess />
		<Faq />
		<Contact />
	</>
);

export default Root;
