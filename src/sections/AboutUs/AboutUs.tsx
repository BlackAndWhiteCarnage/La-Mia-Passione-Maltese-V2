/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { aboutUs } from '@/config';
import { SectionWrapper, NumericDescription } from '@/components';

const AboutUs: FC = () => (
	<SectionWrapper>
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
	</SectionWrapper>
);

export default AboutUs;
