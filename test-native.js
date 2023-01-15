'use strict'

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const md = require('node-mdaemon-api');

const moduleInfo = md.getModuleInfo();

console.dir(moduleInfo);
