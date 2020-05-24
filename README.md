![@vangware/window-open-promise logo](https://i.imgur.com/2v1Pcc0.png)

![NPM Version](https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=flat-square)
![Build Status](https://img.shields.io/travis/vangware/window-open-promise.svg?style=flat-square)

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
import windowOpenPromise from "http://cdn.pika.dev/@vangware/window-open-promise";

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
