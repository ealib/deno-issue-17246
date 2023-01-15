# [Scripts for Deno issue 17246](https://github.com/denoland/deno/issues/17246)

To show the different behaviour of **Node.js for Windows** and
**Deno for Windows** when loading a native package, in particular the
[`node-mdaemon-api` module](https://github.com/ealib/node-mdaemon-api),
which allows Node.js to access the MDaemon's native APIs (an application
available **exclusively for Windows**), here are two scripts showing the
correct loading with Node.js and the error with Deno.

## Node.js: `test-native.js`

```cmd
C:\deno-issue-17246>npm run start-node

> deno-test-native@1.0.0 start-node
> node test-native.js

{
  fileName: '\\\\?\\C:\\deno-issue-17246\\node_modules\\node-mdaemon-api\\node-mdaemon-api.node',
  isPrerelease: true,
  isFreeVersion: true,
  name: 'node-mdaemon-api',
  version: {
    full: '22.0.3-alpha.19',
    major: 22,
    minor: 0,
    release: 3,
    build: 330,
    tag: 'alpha.19'
  }
}

C:\deno-issue-17246>
```

## Deno: `test-native.ts`

```cmd
C:\deno-issue-17246>npm run start-deno

> deno-test-native@1.0.0 start-deno
> deno run --unstable --allow-all test-native.ts

error: Unable to load C:\Users\Utente\AppData\Local\deno\npm\registry.npmjs.org\node-mdaemon-api\22.0.3-alpha.19\node-mdaemon-api.node imported from file:///E:/mtka/mtka-mdaemon/deno-issue-17246/test-native.ts

Caused by:
    stream did not contain valid UTF-8

C:\deno-issue-17246>
```

---
