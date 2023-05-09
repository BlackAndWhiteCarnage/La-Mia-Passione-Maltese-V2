/**
 * External dependencies
 */
import { FC, useRef, useState, useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './ExhibitionsListItem.module.scss';

export type Exhibition = {
	arbiterName: string;
	date: string;
	dogName: string;
	exhibitionName: string;
	grade: string;
	location: string;
	place: number;
};

type ExhibitionsListItemProps = {
	isActive: boolean;
	exhibitions: Array<Exhibition>;
};

const cx = classnames.bind(classes);

const ExhibitionsListItem: FC<ExhibitionsListItemProps> = ({
	isActive,
	exhibitions,
}) => {
	const [height, setHeight] = useState(0);
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isActive) {
			setHeight(0);

			return;
		}

		const updateHeight = () =>
			setHeight(listRef.current!.scrollHeight || 0);

		const resize = () => {
			listRef.current!.removeAttribute('style');
			updateHeight();
		};

		updateHeight();

		window.addEventListener('resize', resize);

		return () => window.removeEventListener('resize', resize);
	}, [isActive]);

	const getInfo = (value: string, label?: string) => (
		<li className={cx('innerListItem', 'is-style-list-item')}>
			{label} {value}
		</li>
	);

	return (
		<div
			className={cx('wrapper', {
				isActive,
			})}
			ref={listRef}
			style={{ height }}
		>
			<ol className={classes.list}>
				{exhibitions.map(
					(
						{
							arbiterName,
							date,
							dogName,
							exhibitionName,
							grade,
							location,
							place,
						},
						index
					) => (
						<li className={classes.listItem} key={index}>
							<ul className={classes.innerList}>
								{getInfo(dogName, 'Sunia:')}
								{getInfo(date, 'Date:')}
								{getInfo(location)}
								{getInfo(exhibitionName)}
								{getInfo(arbiterName, 'Sędzia:')}
								{getInfo(grade, 'Ocena:')}
								{getInfo(place.toString(), 'Zajęte miejsce:')}
							</ul>
						</li>
					)
				)}
			</ol>
		</div>
	);
};

export default ExhibitionsListItem;
