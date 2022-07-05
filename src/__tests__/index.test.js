import fcn from '../index';

describe('fcn', () => {
  it('should join strings', () => {
    expect(fcn('a', 0, null, undefined, true, 1, 'b')).toEqual('a 0 1 b');
  });
  it('should join optional', () => {
    expect(fcn('first', undefined, 'second', null, 'third')).toEqual('first second third');
  });
  it('should join object', () => {
    expect(fcn({ first: true, second: false, third: true })).toEqual('first third');
  });
  it('should join mixed', () => {
    expect(fcn('first', undefined, { second: false, third: true })).toEqual('first third');
  });
  it('should join empty', () => {
    expect(fcn('first', '')).toEqual('first');
  });
});
