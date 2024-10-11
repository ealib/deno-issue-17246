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
        "node-mdaemon-api": "^24.0.2-alpha.35"
    }
    //...
}
```

## Node.js: `native.js`

```cmd
C:\deno-issue-17246>yarn start
yarn run v1.22.22
$ node native.js
{
  fileName: '\\\\?\\C:\\deno-issue-17246\\node_modules\\node-mdaemon-api\\node-mdaemon-api.node',
  isPrerelease: true,
  isFreeVersion: true,
  name: 'node-mdaemon-api',
  version: {
    full: '24.0.2-alpha.34',
    major: 24,
    minor: 0,
    release: 2,
    build: 232,
    tag: 'alpha.34'
  }
}
Done in 0.55s.

C:\deno-issue-17246>
```

## Deno: `native.ts`

```cmd
C:\deno-issue-17246>deno task start
Task start deno run --reload --allow-all native.ts
error: Expected ';', '}' or <eof> at file:///C:/deno-issue-17246/node_modules/.deno/node-mdaemon-api@24.0.2-alpha.34/node_modules/node-mdaemon-api/node-mdaemon-api.node:1:3

  MZ�♥♦���@►☺♫▼�♫�      �!�☺L�!Th...
    ~

C:\deno-issue-17246>
```

---
