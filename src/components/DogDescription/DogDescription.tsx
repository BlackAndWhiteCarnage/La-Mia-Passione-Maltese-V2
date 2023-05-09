/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { ImageData } from '@/types';
import { Title } from '@/components';
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
}) => (
	<div className={classes.wrapper}>
		<Title title={title} level={2} />
		<div className={classes.inner}>
			<p className={cx('description', 'is-style-p')}>{description}</p>
			<div className={classes.imageWrap}>
				<img src={src} alt={alt} className={classes.image} />
			</div>
		</div>
	</div>
);

export default DogDescription;
