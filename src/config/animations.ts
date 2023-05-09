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
