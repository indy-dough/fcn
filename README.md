# fcn

Minimal class constructing tool

## Install

```
$ yarn add fcn
```

## Usage

```js
import fcn from 'fcn';

// Strings
fcn('first', 'second', 'third');

// Optional
fcn(undefined, null);

// Objects
fcn({ first: true, second: false, third: true });

// Mixed
fcn('first', undefined, { second: false, third: true });
```

## Note
Library doesn't support arrays. Using other tools in different projects shows that this feature is not needed.  
