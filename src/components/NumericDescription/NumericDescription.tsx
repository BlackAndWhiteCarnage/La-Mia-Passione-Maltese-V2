/**
 * External dependencies
 */
import { FC } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { ImageData } from '@/types';
import { scaleInAnimation, imageAnimation } from '@/config';
import { useIntersectionObserver } from '@/hooks';
import classes from './NumericDescription.module.scss';

type NumericDescriptionProps = {
	description: string;
	image: ImageData;
	number: number;
};

const cx = classnames.bind(classes);

const NumericDescription: FC<NumericDescriptionProps> = ({
	description,
	image: { src, alt },
	number,
}) => {
	const { element, controls } = useIntersectionObserver();

	return (
		<motion.div
			ref={element}
			variants={scaleInAnimation}
			animate={controls}
			initial="hidden"
			className={cx('wrapper', {
				'is-even': number % 2 === 0,
			})}
		>
			<span className={classes.number}>{number}</span>
			<p className={cx('description', 'is-style-p')}>{description}</p>
			<div className={classes.imageWrap}>
				<motion.img
					variants={imageAnimation}
					src={src}
					alt={alt}
					className={classes.image}
				/>
			</div>
		</motion.div>
	);
};

export default NumericDescription;
