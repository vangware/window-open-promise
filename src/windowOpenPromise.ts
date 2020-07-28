import { isNull } from "@vangware/utils";
import { ERROR_MESSAGE } from "./constants";
import { featureParser } from "./featureParser";
import { WindowOpenPromiseFunction } from "./WindowOpenPromiseFunction";

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
	new Promise<Window>((resolve, reject) =>
		(newWindow =>
			isNull(newWindow)
				? reject(new Error(ERROR_MESSAGE))
				: resolve(newWindow))(
			window.open(url, target, featureParser(features), replace)
		)
	);

export default windowOpenPromise;
