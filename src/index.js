function concat(result, arg) {
  result && (result += ' ');
  return result + arg;
}

module.exports = function () {
  let result = '';
  let i = 0,
    key;

  while (i < arguments.length) {
    const arg = arguments[i++];

    if (typeof arg === 'string' || typeof arg === 'number') {
      result = concat(result, arg);
    } else {
      for (key in arg) {
        if (arg[key]) {
          result = concat(result, key);
        }
      }
    }
  }

  return result;
};
