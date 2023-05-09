/**
 * External dependencies
 */
import { FC, useState } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, Theme, ExhibitionsListItem } from '@/components';
import { Exhibition } from '@/components/ExhibitionsListItem/ExhibitionsListItem';
import classes from './ExhibitionsList.module.scss';

type ExhibitionsListProps = {
	exhibitions: Array<{
		year: number;
		data: Array<Exhibition>;
	}>;
};

const cx = classnames.bind(classes);

const ExhibitionsList: FC<ExhibitionsListProps> = ({ exhibitions }) => {
	const [currentYear, setCurrentYear] = useState(exhibitions[0].year);

	return (
		<div className={classes.wrapper}>
			<Theme
				secondary="#090909"
				primary="#eeeeee"
				className={classes.buttons}
			>
				{exhibitions.map(({ year }) => (
					<Button
						key={year}
						onClick={() => setCurrentYear(year)}
						className={cx('button', {
							isActive: currentYear === year,
						})}
					>
						{year}
					</Button>
				))}
			</Theme>
			{exhibitions.map(({ data, year }, index) => (
				<ExhibitionsListItem
					key={index}
					exhibitions={data}
					isActive={year === currentYear}
				/>
			))}
		</div>
	);
};

export default ExhibitionsList;
