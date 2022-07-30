import _ from 'lodash';
import AirportCodeValidator from '../AirportCodeValidator';
import { validateData } from "src/graph-search";

describe('validateData', () => {
  // const errorMsg = /\*?is not a valid area code/

  // it('should throw error if data contains a non string', () => {
  //   const data = ['AAA', 123, 'ABC'];
  //   expect(() => validateData(AirportCodeValidator, data as any)).toThrow();
  // });

  it('should throw error if airport code is not 3 characters', () => {
    const data = ['AAA', 'ABC', 'ABCD'];
    expect(() => validateData(AirportCodeValidator, data)).toThrow();
  });
});