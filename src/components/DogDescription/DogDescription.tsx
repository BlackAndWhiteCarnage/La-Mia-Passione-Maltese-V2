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
import { Title } from '@/components';
import { scaleInAnimation, imageAnimation } from '@/config';
import { useIntersectionObserver } from '@/hooks';
import classes from './DogDescription.module.scss';

type DogDescriptionProps = {
	description: string;
	image: ImageData;
	title: string;
};

const cx = classnames.bind(classes);

const DogDescription: FC<DogDescriptionProps> = ({
	description,
	image: { src, alt },
	title,
}) => {
	const { element, controls } = useIntersectionObserver();

	return (
		<motion.div
			className={classes.wrapper}
			ref={element}
			variants={scaleInAnimation}
			animate={controls}
			initial="hidden"
		>
			<Title title={title} level={2} />
			<div className={classes.inner}>
				<p className={cx('description', 'is-style-p')}>{description}</p>
				<div className={classes.imageWrap}>
					<motion.img
						src={src}
						alt={alt}
						className={classes.image}
						variants={imageAnimation}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default DogDescription;
