/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { LinkData } from '@/types';
import { Popover, Button, Theme } from '@/components';
import classes from './Navigation.module.scss';
import { ReactComponent as HamburgerIcon } from '@/icons/hamburger.svg';

type NavigationProps = {
	links: Array<LinkData>;
};

const cx = classnames.bind(classes);

const Navigation: FC<NavigationProps> = ({ links }) => (
	<Popover
		button={
			<button className={cx('hamburger')} data-target="popup-element">
				<HamburgerIcon />
			</button>
		}
		children={
			<Theme
				className={classes.navigation}
				primary="#eeeeee"
				secondary="#090909"
			>
				<div className={classes.items}>
					{links.map(({ href, label }) => (
						<Button href={href} className={classes.button}>
							{label}
						</Button>
					))}
				</div>
			</Theme>
		}
	></Popover>
);

export default Navigation;
