/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { aboutUs } from '@/config';
import { NumericDescription } from '@/components';
import classes from './AboutUs.module.scss';

const AboutUs: FC = () => (
	<div className={classes.wrapper}>
		{aboutUs.map(({ image, description }, index) => (
			<NumericDescription
				key={index}
				description={description}
				image={{
					src: image,
					alt: "Bacio D'Amore",
				}}
				number={index + 1}
			/>
		))}
	</div>
);

export default AboutUs;
