import type WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * WindowOpenPromise options.
 */
export type WindowOpenPromiseOptions = {
	/**
	 * WindowOpenPromise features.
	 */
	readonly features?: WindowOpenPromiseFeatures;

	/**
	 * WindowOpenPromise replace.
	 */
	readonly replace?: boolean;

	/**
	 * WindowOpenPromise target.
	 */
	readonly target?: string;

	/**
	 * WindowOpenPromise url.
	 */
	readonly url?: string;
};

export default WindowOpenPromiseOptions;
