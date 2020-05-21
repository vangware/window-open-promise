import { arrayMap, Entry, isBoolean, objectEntries } from "@vangware/micro";
import {
	FEATURE_DISABLED,
	FEATURE_ENABLED,
	FEATURE_SEPARATOR
} from "./constants";
import type WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features: WindowOpenPromiseFeatures = {}) => {
	const featureMap = arrayMap<Entry<WindowOpenPromiseFeatures>, string>(
		([feature, value]) =>
			`${feature}=${
				isBoolean(value)
					? value
						? FEATURE_ENABLED
						: FEATURE_DISABLED
					: value
			}`
	);
	const featureEntries = objectEntries(features);

	return featureMap(featureEntries).join(FEATURE_SEPARATOR);
};

export default featureParser;
