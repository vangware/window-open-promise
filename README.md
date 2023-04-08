<img id="logo" alt="Window Open Promise by Vangware" src="./logo.svg" height="192" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

🪟 Promised `Window.open();`.

## Usage

### 📦 Node

```typescript
import { windowOpenPromise } from "@vangware/window-open-promise";

const windowOpen = windowOpenPromise(window);

windowOpen({
	url: "https://example.com", // URL is not required, you can open a blank window
	top: 10,
	left: 10,
})
	.then(newWindow => {
		newWindow.console.log("This will log in the new window.");
		newWindow.addEventListener("beforeunload", _event => {
			console.log("This will log when the new window is closed.");
		});
	})
	.catch(_error => {
		console.error("This will log if the new window can't be opened.");
	});
```

### 🦕 Deno

```typescript
import { windowOpenPromise } from "https://esm.sh/@vangware/window-open-promise";

const windowOpen = windowOpenPromise(window);

try {
	const newWindow = await windowOpen({
		url: "https://example.com", // URL is not required, you can open a blank window
		top: 10,
		left: 10,
	});
	newWindow.console.log("This will log in the new window.");
	newWindow.addEventListener("beforeunload", _event => {
		console.log("This will log when the new window is closed.");
	});
} catch (_error) {
	console.error("This will log if the new window can't be opened.");
}
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be
necessary to read this, code editors like [VSCode][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[changelog]:
	https://github.com/vangware/window-open-promise/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/window-open-promise
[coverage]: https://coveralls.io/github/vangware/window-open-promise
[documentation]: https://window-open-promise.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/window-open-promise/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/window-open-promise
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/window-open-promise/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
