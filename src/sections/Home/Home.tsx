/**
 * External dependencies
 */
import { motion } from 'framer-motion';
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { revealAnimation } from '@/config';
import { SectionWrapper, Title } from '@/components';
import { useIntersectionObserver } from '@/hooks';
import classes from './Home.module.scss';
import hero from '@/images/hero.png';

const Home: FC = () => {
	const { element, controls } = useIntersectionObserver();

	return (
		<SectionWrapper className={classes.wrapper}>
			<Title title="La Mia Passione Maltese" className={classes.title} />
			<motion.div
				ref={element}
				variants={revealAnimation}
				animate={controls}
				initial="hidden"
				className={classes.hero}
			>
				<img src={hero} alt="Piccolo Perla" />
			</motion.div>
		</SectionWrapper>
	);
};

export default Home;
