/**
 * Error for Window.open when it doesn't open (blocked, or similar).
 */
export declare class WindowOpenError extends Error {
	/**
	 * Creates an instance of WindowOpenError.
	 * @param [error="Window can't be open."] An error can be given to replace the default.
	 */
	constructor(error?: string);
}
