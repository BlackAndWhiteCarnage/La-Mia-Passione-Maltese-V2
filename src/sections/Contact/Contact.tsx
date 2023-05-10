/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { SectionWrapper, ContactForm } from '@/components';
import classes from './Contact.module.scss';

const Contact: FC = () => (
	<SectionWrapper className={classes.wrapper} id="contact">
		<ContactForm />
	</SectionWrapper>
);

export default Contact;
