![@vangware/window-open-promise logo](https://i.imgur.com/pzcGYAZ.png)

![Build Status](https://img.shields.io/github/workflow/status/vangware/window-open-promise/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/window-open-promise/actions)
![Coverage](https://img.shields.io/coveralls/github/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/window-open-promise)
![License](https://img.shields.io/npm/l/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/window-open-promise/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/window-open-promise)
![Open Issues](https://img.shields.io/github/issues/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/window-open-promise/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/window-open-promise)

Promised Window.open.

## Usage

### 📦 Node

```typescript
import { windowOpenPromise } from "@vangware/window-open-promise";

const windowOpen = windowOpenPromise(window);

windowOpen({
    url: "https://example.com", // URL is not required, you can open a blank window
    top: 10,
    left: 10
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
import { windowOpenPromise } from "https://cdn.skypack.dev/@vangware/window-open-promise";

const windowOpen = windowOpenPromise(window);

try {
    const newWindow = await windowOpen({
        url: "https://example.com", // URL is not required, you can open a blank window
        top: 10,
        left: 10
    })
    newWindow.console.log("This will log in the new window.");
    newWindow.addEventListener("beforeunload", _event => {
      console.log("This will log when the new window is closed.");
    });
} catch (_error) {
    console.error("This will log if the new window can't be opened.");
}
```

## Documentation

Documentation can be found [HERE](https://window-open-promise.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/window-open-promise/blob/main/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/window-open-promise).

