import searchArray from '../arraySearch';

describe('searchArray', () => {
  it('shall pass', () => {
    expect(typeof searchArray).toBe('function');
  });

  it('should find the item and return its index', () => {
    expect(searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toBe(1);
    expect(searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)).toBe(5);
    expect(searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(9);
  });

  it('should return null if item is not found', () => {
    expect(searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 100)).toBeNull;
  });

  // todo: complexity tests
});