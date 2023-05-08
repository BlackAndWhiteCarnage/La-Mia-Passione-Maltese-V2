import 'react'; // eslint-disable-line react/no-typos

declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.pdf';

declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

interface CustomCSSProperties {
	'--theme-color-primary': string;
	'--theme-color-secondary': string;
}

declare module 'react' {
	declare module '*.scss';

	export interface CSSProperties extends Partial<CustomCSSProperties> {}
}
