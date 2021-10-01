import type { Entry } from "@vangware/utils";
import { arrayJoin, arrayMap, isBoolean, objectEntries } from "@vangware/utils";
import {
	FEATURE_DISABLED,
	FEATURE_ENABLED,
	FEATURE_SEPARATOR,
} from "./constants";
import type { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures";

/**
 * Parses features object into features string.
 *
 * @example
 * ```typescript
 * featureParser({
 * 	top: 10,
 * 	left: 10,
 * 	resizable: true
 * }); // "top=10,left=10,resizable=1"
 * ```
 * @param features Features object.
 * @returns Parsed string.
 */
export const featureParser = (features: WindowOpenPromiseFeatures = {}) =>
	arrayJoin(FEATURE_SEPARATOR)(
		arrayMap(
			([feature, value]: Entry<Required<WindowOpenPromiseFeatures>>) =>
				`${feature.toLocaleLowerCase()}=${
					isBoolean(value)
						? value
							? FEATURE_ENABLED
							: FEATURE_DISABLED
						: value
				}`,
		)(objectEntries(features as Required<WindowOpenPromiseFeatures>)),
	);
