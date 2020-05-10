import { isNull } from "@vangware/micro";
import featureParser from "./featureParser";
import type WindowOpenPromiseFunction from "./WindowOpenPromiseFunction";

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
			? reject(new Error("Window can't be opened"))
			: resolve(newWindow);
	});

export default windowOpenPromise;
