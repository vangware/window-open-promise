import { featureParser } from "./featureParser";
import { WindowOpenError } from "./WindowOpenError";
/**
 * Promised Window.open.
 * @param url Target URL.
 * @param target Target attribute (_blank, _parent, _self, _top) or name.
 * @param features New window features.
 * @param replace New entry or replace in browser history.
 */
export const windowOpenPromise = async ({ url, target, features, replace }) => {
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
