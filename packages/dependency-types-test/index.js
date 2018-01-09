const {execSync} = require('child_process');
const {existsSync} = require('fs');
const {join} = require('path');

execSync('yarn');

const {optionalDependencies, peerDependencies} = require('./node_modules/@goodforonefare/solo-dependency-consumer/package.json');

const [optionalDependency] = Object.keys(optionalDependencies);
const [peerDependency] = Object.keys(peerDependencies);

const optionalDependencyInstalled = existsSync(join('.', 'node_modules', optionalDependency));
const peerDependencyInstalled = existsSync(join('.', 'node_modules', peerDependency));

console.log(`Is the optional dependency '${optionalDependency}' installed?`);
console.log('   ', optionalDependencyInstalled);

console.log(`Is the peer dependency '${peerDependency}' installed?`);
console.log('   ', peerDependencyInstalled);

if (!optionalDependencyInstalled) {
  throw new Error(`Expected optional dependency '${optionalDependency}' to be installed`);
}

if (peerDependencyInstalled) {
  throw new Error(`Expected peer dependency '${peerDependency}' to *not* be installed`);
}


