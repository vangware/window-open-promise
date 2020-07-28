import { arrayMap, Entry, isBoolean, objectEntries } from "@vangware/utils";
import {
	FEATURE_DISABLED,
	FEATURE_ENABLED,
	FEATURE_SEPARATOR
} from "./constants";
import { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features: WindowOpenPromiseFeatures = {}) =>
	arrayMap(
		([feature, value]: Entry<WindowOpenPromiseFeatures>) =>
			`${feature}=${
				isBoolean(value)
					? value
						? FEATURE_ENABLED
						: FEATURE_DISABLED
					: value
			}`
	)(objectEntries(features)).join(FEATURE_SEPARATOR);

export default featureParser;
