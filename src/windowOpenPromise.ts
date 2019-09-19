import featureParser from "./featureParser";
import WindowOpenError from "./WindowOpenError";
import WindowOpenPromiseFunction from "./WindowOpenPromiseFunction";

/**
 * Promised Window.open.
 * @param options WindowOpenPromise options.
 */
export const windowOpenPromise: WindowOpenPromiseFunction = async ({
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

	return new Promise<Window>((resolve, reject) => {
		if (newWindow !== null) {
			resolve(newWindow);
		} else {
			reject(new WindowOpenError());
		}
	});
};

export default windowOpenPromise;
