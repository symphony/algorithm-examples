import arrayContainsSum from '../sum';

describe('arrayContainsSum', () => {
  it('shall pass', () => {
    expect(typeof arrayContainsSum).toBe('function');
  });

  it('should find a matching sum in the array', () => {
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 0)).toBe(true);
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 6)).toBe(true);
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 20)).toBe(true);
  });

  it('should work with negative integers', () => {
    expect(arrayContainsSum([-2, 2, 5], -4)).toBe(true);
    expect(arrayContainsSum([-2, 2, 5], 3)).toBe(true);
  });

  it('should return false if matching sum is not found', () => {
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], -2)).toBe(false);
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 1)).toBe(false);
    expect(arrayContainsSum([-3, 0, 2, 4, 7, 9, 10], 15)).toBe(false);
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 200)).toBe(false);
  });

  // todo: complexity tests
});
