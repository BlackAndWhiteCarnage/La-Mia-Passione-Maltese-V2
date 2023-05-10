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
	theme?: 'light' | 'dark';
}>;

const cx = classnames.bind(classes);

const SectionWrapper: FC<SectionWrapperProps> = ({
	children,
	className,
	theme = 'dark',
}) => (
	<Theme
		className={cx('wrapper', className)}
		primary={theme === 'light' ? '#eeeeee' : '#090909'}
		secondary={theme === 'light' ? '#090909' : '#eeeeee'}
	>
		<div className={classes.content}>{children}</div>
	</Theme>
);

export default SectionWrapper;
