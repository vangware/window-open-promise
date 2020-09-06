![@vangware/window-open-promise logo](https://i.imgur.com/pzcGYAZ.png)

![Build Status](https://img.shields.io/travis/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://travis-ci.org/github/vangware/window-open-promise)
![License](https://img.shields.io/npm/l/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/window-open-promise/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/window-open-promise)
![Open Issues](https://img.shields.io/github/issues/vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/window-open-promise/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/window-open-promise.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/window-open-promise)

Promised Window.open.

## Usage

### 📦 Node

```typescript
import windowOpenPromise from "@vangware/window-open-promise";

windowOpenPromise({
    url: "https://example.com", // URL is not required, you can open a blank window
    features: { alwaysOnTop: true }
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
import windowOpenPromise from "https://cdn.skypack.dev/@vangware/window-open-promise";

try {
    const newWindow = await windowOpenPromise({
        url: "https://example.com", // URL is not required, you can open a blank window
        features: { alwaysOnTop: true }
    })
    newWindow.console.log("This will log in the new window.");
    newWindow.addEventListener("beforeunload", _event => {
      console.log("This will log when the new window is closed.");
    });
} catch (_error) {
    console.error("This will log if the new window can't be opened.");
}
```
