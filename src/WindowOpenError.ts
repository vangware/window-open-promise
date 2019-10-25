/**
 * Error for Window.open when it doesn't open (blocked, or similar).
 */
export class WindowOpenError extends Error {
	/**
	 * Creates an instance of WindowOpenError.
	 * @param [error="Window can't be open."] An error can be given to replace the default.
	 */
	public constructor(error = "Window can't be open.") {
		super(error);
	}
}

export default WindowOpenError;
