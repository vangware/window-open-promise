/**
 * Parses boolean features into 1/0 values.
 * @param feature Boolean feature value.
 */
const booleanFeature = feature => (feature ? "1" : "0");
/**
 * Parses features object into features string.
 * @param features Features object.
 */
export const featureParser = features =>
	features
		? Object.keys(features)
				.map(feature => ({ feature, value: features[feature] }))
				.map(
					({ feature, value }) =>
						`${feature}=${
							typeof value === "boolean"
								? booleanFeature(value)
								: value
						}`
				)
				.join(",")
		: undefined;
