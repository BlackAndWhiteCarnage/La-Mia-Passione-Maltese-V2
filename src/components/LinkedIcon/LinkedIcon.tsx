/**
 * External dependencies
 */
import { FC, AnchorHTMLAttributes } from 'react';

/**
 * Internal dependencies
 */
import { SVGIcon } from '@/types';
import classes from './LinkedIcon.module.scss';

type LinkedIconProps = {
	href: string;
	icon: SVGIcon;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const LinkedIcon: FC<LinkedIconProps> = ({ href, icon: Icon, ...props }) => (
	<a href={href} {...props} className={classes.wrapper}>
		<Icon className={classes.icon} />
	</a>
);

export default LinkedIcon;
