const { Suite } = require('benchmark');
const cn = require('classnames');
const clsx = require('clsx');

const cc = require('../dist/fcn.js');

function bench() {
  new Suite()
    .add('classnames', () => cn({ first: true, second: true, third: false }))
    .add('clsx      ', () => clsx({ first: true, second: true, third: false }))
    .add('fcn       ', () => `${cc('first', true)} ${cc('second', true)} ${cc('third', false)}`)
    .on('cycle', e => console.log('  ' + e.target))
    .run();
}

bench('Comparison');
