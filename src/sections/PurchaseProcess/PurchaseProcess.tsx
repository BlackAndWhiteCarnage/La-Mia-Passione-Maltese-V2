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
	<SectionWrapper className={classes.wrapper} id="purchase-process">
		{purchaseProcess.map(({ title, description, listItems }, index) => (
			<div className={classes.step} key={index}>
				<Title title={title} level={2} />
				<p className={cx('description', 'is-style-p')}>{description}</p>
				{listItems && (
					<ol className={classes.list}>
						{listItems.map((item, i) => (
							<li
								className={cx('listItem', 'is-style-p-small')}
								key={i}
							>
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
