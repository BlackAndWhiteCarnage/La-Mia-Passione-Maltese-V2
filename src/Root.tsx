/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Home, AboutUs } from '@/sections';
import classes from './Root.module.scss';

const Root: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.content}>
			<Home />
			<AboutUs />
		</div>
	</div>
);

export default Root;
