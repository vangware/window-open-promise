import { EMPTY_OBJECT, EMPTY_STRING, when } from "@vangware/micro";
import featureParser from "./featureParser";
import WindowOpenError from "./WindowOpenError";
import WindowOpenPromiseFunction from "./WindowOpenPromiseFunction";

/**
 * Promised Window.open.
 * @param options WindowOpenPromise options.
 */
export const windowOpenPromise: WindowOpenPromiseFunction = ({
	url = EMPTY_STRING,
	target = EMPTY_STRING,
	features = EMPTY_OBJECT,
	replace = false
}) =>
	(newWindow =>
		new Promise<Window>((resolve, reject) =>
			when(newWindow, resolve, () => reject(new WindowOpenError()))
		))(window.open(url, target, featureParser(features), replace));

export default windowOpenPromise;
