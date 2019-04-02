import { featureParser } from "./featureParser";
import { WindowOpenError } from "./WindowOpenError";
/**
 * Promised Window.open.
 * @param options WindowOpenPromise options.
 */
export const windowOpenPromise = async ({
	url = "",
	target = "",
	features = {},
	replace = false
}) => {
	const newWindow = window.open(
		url,
		target,
		featureParser(features),
		replace
	);
	return new Promise((resolve, reject) => {
		if (newWindow !== null) {
			resolve(newWindow);
		} else {
			reject(new WindowOpenError());
		}
	});
};
