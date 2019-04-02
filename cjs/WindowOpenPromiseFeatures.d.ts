/**
 * WindowOpenPromise features.
 */
export interface WindowOpenPromiseFeatures {
	/**
	 * WindowOpenPromise is displayed always below.
	 */
	alwaysLowered?: boolean;
	/**
	 * WindowOpenPromise is displayed always on top of all windows.
	 */
	alwaysOnTop?: boolean;
	/**
	 * WindowOpenPromise is displayed always on top of other browser windows.
	 */
	alwaysRaised?: boolean;
	/**
	 * WindowOpenPromise centered in relation to parent (requires chrome true).
	 */
	center?: boolean;
	/**
	 * WindowOpenPromise opens in a window only fashion.
	 */
	chrome?: boolean;
	/**
	 * WindowOpenPromise has a close button.
	 */
	close?: boolean;
	/**
	 * WindowOpenPromise opens in a dialog fashion (requires chrome true).
	 */
	dialog?: boolean;
	/**
	 * WindowOpenPromise height (minimum 100).
	 */
	height?: number;
	/**
	 * WindowOpenPromise left position.
	 */
	left?: number;
	/**
	 * WindowOpenPromise renders the location/url bar.
	 */
	locationBar?: boolean;
	/**
	 * WindowOpenPromise renders the menu bar.
	 */
	menuBar?: boolean;
	/**
	 * WindowOpenPromise is minimizable (requires dialog true).
	 */
	minimizable?: boolean;
	/**
	 * WindowOpenPromise opens in a modal fashion.
	 */
	modal?: boolean;
	/**
	 * WindowOpenPromise can't access it's opener.
	 */
	noOpener?: boolean;
	/**
	 * WindowOpenPromise outer height (minimum 100).
	 */
	outerHeight?: number;
	/**
	 * WindowOpenPromise outer width (minimum 100).
	 */
	outerWidth?: number;
	/**
	 * WindowOpenPromise renders the location/url bar.
	 */
	personalBar?: boolean;
	/**
	 * WindowOpenPromise is resizable.
	 */
	resizable?: boolean;
	/**
	 * WindowOpenPromise has scrollbars.
	 */
	scrollbars?: boolean;
	/**
	 * WindowOpenPromise renders the status bar.
	 */
	statusBar?: boolean;
	/**
	 * WindowOpenPromise renders the title bar.
	 */
	titleBar?: boolean;
	/**
	 * WindowOpenPromise renders the tool bar.
	 */
	toolBar?: boolean;
	/**
	 * WindowOpenPromise top position.
	 */
	top?: number;
	/**
	 * WindowOpenPromise width (minimum 100).
	 */
	width?: number;
}
export default WindowOpenPromiseFeatures;
