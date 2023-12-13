import { window, matchMedia } from 'some-package'; // Replace 'some-package' with the actual package name
export const preferDarkScheme =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
