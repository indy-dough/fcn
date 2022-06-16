const { Suite } = require('benchmark');
const cn = require('classnames');
const clsx = require('clsx');

const fcn = require('../dist/index.min.js');

function bench(name, ...args) {
  console.log(`\n# ${name}`);
  new Suite()
    .add('classnames', () => cn.apply(cn, args))
    .add('clsx      ', () => clsx.apply(clsx, args))
    .add('fcn       ', () => fcn.apply(fcn, args))
    .on('cycle', e => console.log('  ' + e.target))
    .run();
}

bench('Strings', 'first', 'second', 'third');

bench('Optional', 'first', undefined, 'second', null, 'third');

bench('Objects', { first: true, second: true, third: true });

bench('Mixed', 'first', undefined, { second: true, third: false });
