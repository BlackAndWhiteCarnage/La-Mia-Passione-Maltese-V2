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
import { Navigation } from '@/components';
import { navigation } from '@/config';

const Root: FC = () => (
	<div id="home-page">
		<Navigation links={navigation} />
		<Home />
		<AboutUs />
		<OurDogs />
		<Exhibitions />
		<PurchaseProcess />
		<Faq />
		<Contact />
	</div>
);

export default Root;
