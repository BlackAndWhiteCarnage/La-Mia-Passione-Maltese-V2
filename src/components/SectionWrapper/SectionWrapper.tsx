/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Theme } from '@/components';
import classes from './SectionWrapper.module.scss';

type SectionWrapperProps = PropsWithChildren<{
	className?: string;
	id?: string;
	theme?: 'light' | 'dark';
	title?: string;
	titlePosition?: 'left' | 'right';
}>;

const cx = classnames.bind(classes);

const SectionWrapper: FC<SectionWrapperProps> = ({
	children,
	className,
	id,
	theme = 'dark',
	title,
	titlePosition = 'left',
}) => (
	<Theme
		className={cx('wrapper', className)}
		primary={theme === 'light' ? '#eeeeee' : '#090909'}
		secondary={theme === 'light' ? '#090909' : '#eeeeee'}
	>
		{title && <span className={cx('title', titlePosition)}>{title}</span>}
		<div className={classes.content} id={id}>
			{children}
		</div>
	</Theme>
);

export default SectionWrapper;
