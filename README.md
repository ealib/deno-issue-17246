# [Scripts for Deno issue 17246](https://github.com/denoland/deno/issues/17246)

To show the different behaviour of **Node.js for Windows** and
**Deno for Windows** when loading a native package, in particular the
[`node-mdaemon-api` module](https://github.com/ealib/node-mdaemon-api),
which allows Node.js to access the MDaemon's native APIs (an application
available **exclusively for Windows**), here are two scripts showing the
correct loading with Node.js and the error with Deno.

## `package.json`

```json
{
    //...
    "dependencies": {
        "node-mdaemon-api": "^23.5.3-alpha.27"
    }
    //...
}
```

## Node.js: `test-native.js`

```cmd
C:\deno-issue-17246>yarn run start-node
yarn run v1.22.22
$ node test-native.js
{
  fileName: '\\\\?\\C:\\deno-issue-17246\\node_modules\\node-mdaemon-api\\node-mdaemon-api.node',
  isPrerelease: true,
  isFreeVersion: true,
  name: 'node-mdaemon-api',
  version: {
    full: '23.5.3-alpha.27',
    major: 23,
    minor: 5,
    release: 3,
    build: 86,
    tag: 'alpha.27'
  }
}
Done in 0.22s.

C:\deno-issue-17246>
```

## Deno: `test-native.ts`

```cmd
C:\deno-issue-17246>yarn run start-deno
yarn run v1.22.22
$ deno run --reload --allow-all test-native.ts
error: Unable to load E:\deno-issue-17246\node_modules\.deno\node-mdaemon-api@23.5.3-alpha.27\node_modules\node-mdaemon-api\node-mdaemon-api.node imported from file:///E:/deno-issue-17246/test-native.ts

Caused by:
    invalid utf-8 sequence of 1 bytes from index 2
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

C:\deno-issue-17246>
```

---
