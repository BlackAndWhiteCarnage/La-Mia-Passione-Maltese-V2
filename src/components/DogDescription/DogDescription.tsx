/**
 * External dependencies
 */
import { FC } from 'react';

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

const DogDescription: FC<DogDescriptionProps> = ({
	description,
	image: { src, alt },
	title,
}) => (
	<div className={classes.wrapper}>
		<Title title={title} level={2} />
		<div className={classes.inner}>
			<p className={classes.description}>{description}</p>
			<img src={src} alt={alt} />
		</div>
	</div>
);

export default DogDescription;
