/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { purchaseProcess } from '@/config';
import { SectionWrapper, Title } from '@/components';
import classes from './PurchaseProcess.module.scss';

const cx = classnames.bind(classes);

const PurchaseProcess: FC = () => (
	<SectionWrapper className={classes.wrapper}>
		{purchaseProcess.map(({ title, description, listItems }) => (
			<div className={classes.step}>
				<Title title={title} level={2} />
				<p className={cx('description', 'is-style-p')}>{description}</p>
				{listItems && (
					<ol className={classes.list}>
						{listItems.map((item) => (
							<li className={cx('listItem', 'is-style-p-small')}>
								{item}
							</li>
						))}
					</ol>
				)}
			</div>
		))}
	</SectionWrapper>
);

export default PurchaseProcess;
