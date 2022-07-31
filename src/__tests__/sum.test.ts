import arrayContainsSum from '../sum';

describe('arrayContainsSum', () => {
  it('shall pass', () => {
    expect(typeof arrayContainsSum).toBe('function');
  });

  it('should find the item and return its index', () => {
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 6)).toBe(true);
  });

  it('should return null if item is not found', () => {
    expect(arrayContainsSum([0, 2, 4, 7, 9, 10], 15)).toBe(false);
  });

  // todo: complexity tests
});


