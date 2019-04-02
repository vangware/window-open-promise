import WindowOpenPromiseOptions from "./WindowOpenPromiseOptions";
/**
 * Promised Window.open interface.
 */
export declare type WindowOpenPromiseFunction = (
	options: WindowOpenPromiseOptions
) => Promise<Window>;
export default WindowOpenPromiseFunction;
