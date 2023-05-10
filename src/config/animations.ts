export const templateAnimation = {
	show: {
		transition: { staggerChildren: 0.05 },
	},
};

export const letterAnimation = {
	hidden: {
		opacity: 0,
		scale: 4,
		y: -50,
	},
	show: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: { duration: 0.1, type: 'spring', stiffness: 150 },
	},
};

export const revealAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		top: '50%',
		left: '50%',
		x: '-50%',
		y: '-50%',
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 2, delay: 1 },
	},
};

export const scaleInAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.35 },
	},
};

export const imageAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.8 },
	},
};
