/**
 * WindowOpenPromise features.
 */
export type WindowOpenPromiseFeatures = {
	/**
	 * WindowOpenPromise is displayed always below.
	 */
	readonly alwaysLowered?: boolean;

	/**
	 * WindowOpenPromise is displayed always on top of all windows.
	 */
	readonly alwaysOnTop?: boolean;

	/**
	 * WindowOpenPromise is displayed always on top of other browser windows.
	 */
	readonly alwaysRaised?: boolean;

	/**
	 * WindowOpenPromise centered in relation to parent (requires chrome true).
	 */
	readonly center?: boolean;

	/**
	 * WindowOpenPromise opens in a window only fashion.
	 */
	readonly chrome?: boolean;

	/**
	 * WindowOpenPromise has a close button.
	 */
	readonly close?: boolean;

	/**
	 * WindowOpenPromise opens in a dialog fashion (requires chrome true).
	 */
	readonly dialog?: boolean;

	/**
	 * WindowOpenPromise height (minimum 100).
	 */
	readonly height?: number;

	/**
	 * WindowOpenPromise left position.
	 */
	readonly left?: number;

	/**
	 * WindowOpenPromise renders the location/url bar.
	 */
	readonly locationBar?: boolean;

	/**
	 * WindowOpenPromise renders the menu bar.
	 */
	readonly menuBar?: boolean;

	/**
	 * WindowOpenPromise is minimizable (requires dialog true).
	 */
	readonly minimizable?: boolean;

	/**
	 * WindowOpenPromise opens in a modal fashion.
	 */
	readonly modal?: boolean;

	/**
	 * WindowOpenPromise can't access it's opener.
	 */
	readonly noOpener?: boolean;

	/**
	 * WindowOpenPromise outer height (minimum 100).
	 */
	readonly outerHeight?: number;

	/**
	 * WindowOpenPromise outer width (minimum 100).
	 */
	readonly outerWidth?: number;

	/**
	 * WindowOpenPromise renders the location/url bar.
	 */
	readonly personalBar?: boolean;

	/**
	 * WindowOpenPromise is resizable.
	 */
	readonly resizable?: boolean;

	/**
	 * WindowOpenPromise has scrollbars.
	 */
	readonly scrollbars?: boolean;

	/**
	 * WindowOpenPromise renders the status bar.
	 */
	readonly statusBar?: boolean;

	/**
	 * WindowOpenPromise renders the title bar.
	 */
	readonly titleBar?: boolean;

	/**
	 * WindowOpenPromise renders the tool bar.
	 */
	readonly toolBar?: boolean;

	/**
	 * WindowOpenPromise top position.
	 */
	readonly top?: number;

	/**
	 * WindowOpenPromise width (minimum 100).
	 */
	readonly width?: number;
};

export default WindowOpenPromiseFeatures;
