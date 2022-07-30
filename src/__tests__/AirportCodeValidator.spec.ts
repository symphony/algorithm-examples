import { validateData } from "src/graph-search";
import AirportCodeValidator from '../AirportCodeValidator';

describe('validateData', () => {
  // const errorMsg = /\*?is not a valid area code/

  it('should throw error if data contains a non string', () => {
    const data = ['AAA', 123, 'ABC']
    const theTest = () => validateData(AirportCodeValidator, data as any);

    expect(theTest.toThrow());
  });
});