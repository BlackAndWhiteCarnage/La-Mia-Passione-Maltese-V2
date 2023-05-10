/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { LinkData, SVGIcon } from '@/types';
import { Popover, Button, Theme, LinkedIcon } from '@/components';
import { ReactComponent as HamburgerIcon } from '@/icons/hamburger.svg';
import classes from './Navigation.module.scss';

type NavigationProps = {
	navigationLinks: Array<LinkData>;
	contactLinks: Array<{
		href: string;
		icon: SVGIcon;
	}>;
};

const cx = classnames.bind(classes);

const Navigation: FC<NavigationProps> = ({ navigationLinks, contactLinks }) => (
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
					{navigationLinks.map(({ href, label }, index) => (
						<Button
							href={href}
							className={classes.button}
							key={index}
						>
							{label}
						</Button>
					))}
				</div>
				<div className={classes.contactIcons}>
					{contactLinks.map((data, index) => (
						<LinkedIcon {...data} target="_blank" key={index} />
					))}
				</div>
			</Theme>
		}
	></Popover>
);

export default Navigation;
