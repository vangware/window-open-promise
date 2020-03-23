import type WindowOpenPromiseOptions from "./WindowOpenPromiseOptions";

/**
 * Promised Window.open interface.
 */
export type WindowOpenPromiseFunction = (
	options: WindowOpenPromiseOptions
) => Promise<Window>;

export default WindowOpenPromiseFunction;
