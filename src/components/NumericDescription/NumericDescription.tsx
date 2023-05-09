/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { ImageData } from '@/types';
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
}) => (
	<div
		className={cx('wrapper', {
			'is-even': number % 2 === 0,
		})}
	>
		<span className={classes.number}>{number}</span>
		<p className={cx('description', 'is-style-p')}>{description}</p>
		<div className={classes.imageWrap}>
			<img src={src} alt={alt} className={classes.image} />
		</div>
	</div>
);

export default NumericDescription;
