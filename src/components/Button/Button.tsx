/**
 * External dependencies
 */
import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Button.module.scss';

const cx = classnames.bind(classes);

type RealButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = RealButtonProps | AnchorButtonProps;

const AnchorButton: FC<AnchorButtonProps> = (props) => (
	<a {...props}>{props.children}</a>
);

const RealButton: FC<RealButtonProps> = ({ ...props }) => <button {...props} />;

const hasAnchorProps = (props: any): props is AnchorButtonProps => !!props.href;
const hasButtonProps = (props: any): props is RealButtonProps => !props.href;

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
	const buttonClassName = cx(className, 'button', 'is-style-text-large');

	return hasAnchorProps(props) ? (
		<AnchorButton {...props} className={buttonClassName}>
			{children}
		</AnchorButton>
	) : hasButtonProps(props) ? (
		<RealButton {...props} className={buttonClassName}>
			{children}
		</RealButton>
	) : null;
};

export default Button;
