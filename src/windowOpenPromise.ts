import { isNull } from "@vangware/utils";
import { ERROR_MESSAGE } from "./constants";
import featureParser from "./featureParser";
import WindowOpenPromiseFunction from "./WindowOpenPromiseFunction";

/**
 * Promised Window.open.
 * @param options - WindowOpenPromise options.
 */
export const windowOpenPromise: WindowOpenPromiseFunction = ({
	url = "",
	target = "",
	features = {},
	replace = false
}) =>
	new Promise<Window>((resolve, reject) => {
		const newWindow = window.open(
			url,
			target,
			featureParser(features),
			replace
		);

		return isNull(newWindow)
			? reject(new Error(ERROR_MESSAGE))
			: resolve(newWindow);
	});

export default windowOpenPromise;
