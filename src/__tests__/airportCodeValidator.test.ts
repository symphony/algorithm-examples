import { AirportCodeValidator, validateData } from '../helpers/AirportCodeValidator';

describe('validateData', () => {
  //   // const errorMsg = /\*?is not a valid area code/

  it('shall pass', () => {
    expect(typeof validateData).toBe('function');
  });

  it('should validate all strings in an array', () => {
    const data = ['AAA', 'BBB', 'CCC'];
    expect(validateData(AirportCodeValidator, data)).toBe(true);
  });

  it('should throw error if data contains a non string', () => {
    const data = ['AAA', 123, 'ABC'];

    // @ts-expect-error
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });

  it('should throw error if airport code is not all uppercase', () => {
    const data = ['AAA', 'Aba', 'ABC'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });

  it('should throw error if airport code is not all letters', () => {
    const data = ['AAA', 'ABC', '123'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });

  it('should throw error if airport code is not 3 characters (larger)', () => {
    const data = ['AAA', 'ABC', 'ABCD'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });

  it('should throw error if airport code is not 3 characters (smaller)', () => {
    const data = ['AAA', 'AB'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });
});