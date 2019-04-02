import WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * WindowOpenPromise options.
 */
export interface WindowOpenPromiseOptions {
	/**
	 * WindowOpenPromise features.
	 */
	features?: WindowOpenPromiseFeatures;

	/**
	 * WindowOpenPromise replace.
	 */
	replace?: boolean;

	/**
	 * WindowOpenPromise target.
	 */
	target?: string;

	/**
	 * WindowOpenPromise url.
	 */
	url?: string;
}

export default WindowOpenPromiseOptions;
