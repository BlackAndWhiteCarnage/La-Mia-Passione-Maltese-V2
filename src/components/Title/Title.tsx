/**
 * External dependencies
 */
import { FC } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Title.module.scss';

const cx = classnames.bind(classes);

type TitleProps = {
	level?: 1 | 2;
	title: string;
};

const Title: FC<TitleProps> = ({ level = 1, title }) => {
	const H = level === 1 ? 'h1' : 'h2';

	return (
		<div>
			<H className={classes.title}>{title}</H>
			<div className={cx('splitTitle', 'is-style-h1')}>
				{title.split(' ').map((word, index) => (
					<div key={index} className={classes.word}>
						{word.split('').map((letter, i) => (
							<motion.span key={i} className={classes.letter}>
								{letter}
							</motion.span>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Title;
