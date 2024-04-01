const { reverseArray } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('[4, 5, 6]', () => {
    expect(reverseArray([4, 5, 6])).toEqual([6, 5, 4]);
  });
  test('[1]', () => {
    expect(reverseArray([1])).toEqual([1]);
  });
  test('[]', () => {
    expect(reverseArray([])).toEqual([]);
  });
  test('["d", "c", "b", "a"]', () => {
    expect(reverseArray(['d', 'c', 'b', 'a'])).toEqual(['a', 'b', 'c', 'd']);
  });
});
