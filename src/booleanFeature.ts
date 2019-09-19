/**
 * Parses boolean features into 1/0 values.
 * @param feature Boolean feature value.
 */
export const booleanFeature = (feature = false) => (feature ? "1" : "0");

export default booleanFeature;
