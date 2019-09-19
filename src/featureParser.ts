import { objectMap, typeOf } from "@vangware/micro";
import booleanFeature from "./booleanFeature";
import WindowOpenPromiseFeatures from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = (features?: WindowOpenPromiseFeatures) =>
	features
		? objectMap(features, (value, feature) => ({ feature, value }))
				.map(({ feature, value }) => ({
					feature,
					value: typeOf(value).isBoolean
						? booleanFeature(value as boolean)
						: value
				}))
				.map(({ feature, value }) => `${feature}=${value}`)
				.join(",")
		: undefined;

export default featureParser;
