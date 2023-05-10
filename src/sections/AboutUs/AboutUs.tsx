/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { aboutUs } from '@/config';
import { SectionWrapper, NumericDescription } from '@/components';
import classes from './AboutUs.module.scss';

const AboutUs: FC = () => (
	<SectionWrapper id="about-us" title="O Hodowli">
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
	</SectionWrapper>
);

export default AboutUs;
