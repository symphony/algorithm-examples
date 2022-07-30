import _ from 'lodash';
import AirportCodeValidator from '../AirportCodeValidator';
import { validateData } from '../graph-search';

describe('validateData', () => {
  // const errorMsg = /\*?is not a valid area code/

  it('should validate all strings in an array', () => {
    const data = ['AAA', 'BBB', 'CCC'];
    const logSpy = jest.spyOn('console', 'log');

    validateData(AirportCodeValidator, data)
    expect(logSpy).toBeCalledWith('- All codes valid -');
  });

  it('should throw error if data contains a non string', () => {
    const data = ['AAA', 123, 'ABC'];

    // @ts-expect-error
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });

  it('should throw error if airport code is not 3 characters', () => {
    const data = ['AAA', 'ABC', 'ABCD'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });
});