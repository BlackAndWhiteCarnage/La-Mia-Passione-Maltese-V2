import 'react'; // eslint-disable-line react/no-typos

interface CustomCSSProperties {
	'--theme-color-primary': string;
	'--theme-color-secondary': string;
}

declare module 'react' {
	declare module '*.scss';

	export interface CSSProperties extends Partial<CustomCSSProperties> {}
}
