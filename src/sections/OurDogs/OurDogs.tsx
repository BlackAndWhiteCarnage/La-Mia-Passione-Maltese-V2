/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ourDogs } from '@/config';
import { SectionWrapper, DogDescription } from '@/components';
import classes from './OurDogs.module.scss';

const OurDogs: FC = () => (
	<SectionWrapper id="our-dogs">
		<div className={classes.wrapper}>
			{ourDogs.map(({ image, description, title }, index) => (
				<DogDescription
					key={index}
					title={title}
					description={description}
					image={{
						src: image,
						alt: title,
					}}
				/>
			))}
		</div>
	</SectionWrapper>
);

export default OurDogs;
