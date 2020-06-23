import { arrayMap, Entry, isBoolean, objectEntries } from "@vangware/utils";
import {
	FEATURE_DISABLED,
	FEATURE_ENABLED,
	FEATURE_SEPARATOR
} from "./constants";
import WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features: WindowOpenPromiseFeatures = {}) => {
	const featureMap = arrayMap(
		([feature, value]: Entry<WindowOpenPromiseFeatures>) =>
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
