import { isBoolean, objectMap, when } from "@vangware/micro";
import type WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features?: WindowOpenPromiseFeatures) =>
	when(features, definedFeatures =>
		objectMap(
			definedFeatures,
			(value, feature) =>
				`${feature}=${isBoolean(value) ? (value ? "1" : "0") : value}`
		).join(",")
	);

export default featureParser;
