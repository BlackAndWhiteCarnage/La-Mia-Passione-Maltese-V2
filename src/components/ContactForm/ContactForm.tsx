/**
 * External dependencies
 */
import { FC, useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';
import emailjs from 'emailjs-com';

/**
 * Internal dependencies
 */
import { Button, FormField } from '@/components';
import { scaleInAnimation, imageAnimation } from '@/config';
import { useIntersectionObserver } from '@/hooks';
import classes from './ContactForm.module.scss';

const cx = classnames.bind(classes);

type ContactFormFields = {
	email: string;
	message: string;
};

const ContactForm: FC = () => {
	const [submitdFeedback, setSubmitFeedback] = useState<{
		type: string;
		message: string;
	} | null>();

	const methods = useForm<ContactFormFields>();

	const { element, controls } = useIntersectionObserver();

	const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID!,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
				data,
				process.env.REACT_APP_EMAILJS_USER!
			)
			.then(
				(result) => {
					result.status === 200 &&
						setSubmitFeedback({
							type: 'success',
							message:
								'Dziękujemy za wiadomość. Email został wysłany!',
						});
				},
				(error) => {
					error &&
						setSubmitFeedback({
							type: 'error',
							message:
								'Coś poszło nie tak, proszę spróbować później',
						});
				}
			);
	};

	return (
		<FormProvider {...methods}>
			<motion.form
				ref={element}
				variants={scaleInAnimation}
				animate={controls}
				initial="hidden"
				className={classes.wrapper}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{submitdFeedback && (
					<div className={cx('submitFeedback', submitdFeedback.type)}>
						<p className={cx('is-style-button')}>
							{submitdFeedback.message}
						</p>
					</div>
				)}
				<FormField
					name="subject"
					type="input"
					label="Temat"
					validation={{
						required: 'Podaj temat.',
					}}
				/>
				<FormField
					name="email"
					type="input"
					label="Email"
					validation={{
						required: 'Email jest wymagany.',
						pattern: {
							value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
							message: 'Email jest niepoprawny.',
						},
					}}
				/>
				<FormField
					name="message"
					type="textarea"
					label="Wiadomość"
					validation={{
						required: 'Wiadomość jest wymagana.',
						pattern: {
							value: /^[\s\S]{30,}$/,
							message:
								'Wiadomość musi zawierać conajmniej 30 znaków.',
						},
					}}
				/>
				<Button type="submit" className={classes.button}>
					Wyślij
				</Button>
			</motion.form>
		</FormProvider>
	);
};

export default ContactForm;
