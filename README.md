# window-open-promise

[![[NPM Version]](https://img.shields.io/npm/v/@vangware/window-open-promise.svg?style=flat-square)](https://npm.im/@vangware/window-open-promise)
[![[Build Status]](https://img.shields.io/travis/vangware/window-open-promise.svg?style=flat-square)](https://travis-ci.org/vangware/window-open-promise)

Promised Window.open.

## Usage

```typescript
import { windowOpenPromise } from "@vangware/window-open-promise";

windowOpenPromise()
  .then(newWindow => {
    newWindow.console.log("This will log in the new window.");
    newWindow.addEventListener("beforeunload", event => {
      console.log("This will log when the new window is closed.");
    });
  })
  .catch(error => {
    console.error("This will log if the new window can't be opened.");
  });
```
