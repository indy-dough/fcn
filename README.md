# fcn &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/indy-dough/fcn/blob/main/LICENSE)

Blazingly ⚡️ fast and extremely tiny library for conditional concatenation of classname strings.

## Install

```
$ yarn add fcn
```

## Usage

```jsx
import cc from 'fcn';

function Component ({ className }) {
  return (
    <div className={`some ${cc('first', cond1)} ${cc('second', cond2)} ${className}`} />
  );
}
```

Framework memoization is helping when conditions change often.

```jsx
import cc from 'fcn';

function Component ({ className }) {
  const composedClassName = useMemo(() => {
    return `some ${cc('first', cond1)} ${cc('second', cond2)} ${className}`;
  }, [cond1, cond2, className]);
  
  return (
    <div className={composedClassName} />
  );
}
```

## Support

Library is framework-agnostic, so you can use it with any js or css framework.

## Migration from ^0.0.1 to ^1.0.0

Replace fcn with one of the compatible libraries (clsx, classnames), install new fcn version and start using new blazingly fast className conditional concatenation.

## Bench

```
classnames x 27,423,552 ops/sec ±0.37% (93 runs sampled)
clsx       x 27,855,810 ops/sec ±0.48% (95 runs sampled)
fcn        x 1,013,440,971 ops/sec ±0.12% (100 runs sampled)
```

### License

fcn is [MIT licensed](./LICENSE).
