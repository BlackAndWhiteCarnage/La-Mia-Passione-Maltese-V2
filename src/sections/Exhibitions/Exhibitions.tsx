/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { exhibitions } from '@/config';
import { SectionWrapper, ExhibitionsList } from '@/components';

const Exhibitions: FC = () => (
	<SectionWrapper theme="light">
		<ExhibitionsList exhibitions={exhibitions} />
	</SectionWrapper>
);

export default Exhibitions;
