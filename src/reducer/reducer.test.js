import reducer from './reducer';

describe('Reducer', () => {
  it('should be a function', () => {
    const actual = typeof reducer;
    const expected = 'function';

    expect(actual).toBe(expected);
  })
});
