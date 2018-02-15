/**
 * Promised Window.open interface.
 */
export type WindowOpenPromiseFunction = (
	url?: string,
	target?: string,
	features?: string,
	replace?: boolean
) => Promise<Window>;
