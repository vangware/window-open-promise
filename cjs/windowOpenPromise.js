"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const featureParser_1 = require("./featureParser");
const WindowOpenError_1 = require("./WindowOpenError");
/**
 * Promised Window.open.
 * @param options WindowOpenPromise options.
 */
exports.windowOpenPromise = ({
	url = "",
	target = "",
	features = {},
	replace = false
}) =>
	tslib_1.__awaiter(this, void 0, void 0, function*() {
		const newWindow = window.open(
			url,
			target,
			featureParser_1.featureParser(features),
			replace
		);
		return new Promise((resolve, reject) => {
			if (newWindow !== null) {
				resolve(newWindow);
			} else {
				reject(new WindowOpenError_1.WindowOpenError());
			}
		});
	});
