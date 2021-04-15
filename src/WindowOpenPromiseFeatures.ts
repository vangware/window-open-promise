import type { WindowOpenPromiseOptions } from "./WindowOpenPromiseOptions";

/**
 * WindowOpenPromise features.
 */
export type WindowOpenPromiseFeatures = Omit<
	WindowOpenPromiseOptions,
	"replace" | "target" | "url"
>;
