/**
 * External dependencies
 */
import { FC, PropsWithChildren, useRef } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { scaleInAnimation } from '@/config';
import { useOnResizeCallback, useIntersectionObserver } from '@/hooks';
import classes from './AccordionItem.module.scss';

export type AccordionItemProps = PropsWithChildren<{
	label: string;
	onToggle: (value: boolean) => void;
	isOpen?: boolean;
}>;

const cx = classnames.bind(classes);

const AccordionItem: FC<AccordionItemProps> = ({
	children,
	label,
	onToggle,
	isOpen,
}) => {
	const { element, controls } = useIntersectionObserver();

	const contentRef = useRef<HTMLParagraphElement>(null);

	useOnResizeCallback(() => {
		if (contentRef.current) {
			contentRef.current.removeAttribute('style');
			contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
		}
	}, true);

	return (
		<motion.div
			ref={element}
			variants={scaleInAnimation}
			animate={controls}
			initial="hidden"
			className={cx('wrapper', {
				isOpen,
			})}
		>
			<button
				className={cx('labelButton', 'is-style-button')}
				onClick={() => onToggle(!isOpen)}
			>
				{label}
			</button>
			<div className={classes.content} ref={contentRef}>
				{children}
			</div>
		</motion.div>
	);
};

export default AccordionItem;
