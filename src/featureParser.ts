import { arrayMap, Entry, isBoolean, objectEntries } from "@vangware/micro";
import type WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features?: WindowOpenPromiseFeatures) =>
	features !== undefined
		? arrayMap<Entry<WindowOpenPromiseFeatures>, string>(
				([feature, value]) =>
					`${feature}=${
						isBoolean(value) ? (value ? "1" : "0") : value
					}`
		  )(objectEntries(features)).join(",")
		: undefined;

export default featureParser;
