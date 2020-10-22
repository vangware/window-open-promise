import { WindowOpenPromiseOptions } from "./WindowOpenPromiseOptions";

/**
 * WindowOpenPromise features.
 */
export type WindowOpenPromiseFeatures = Omit<
	WindowOpenPromiseOptions,
	"url" | "target" | "replace"
>;
