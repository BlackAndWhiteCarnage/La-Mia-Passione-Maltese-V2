/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { faq } from '@/config';
import { SectionWrapper, Accordion } from '@/components';

const Faq: FC = () => (
	<SectionWrapper theme="light" id="faq" title="Faq">
		<Accordion expanded={0} items={faq} />
	</SectionWrapper>
);

export default Faq;
