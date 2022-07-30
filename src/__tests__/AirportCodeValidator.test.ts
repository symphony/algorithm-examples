import { validateData } from "src/graph-search";
import AirportCodeValidator from '../AirportCodeValidator';

describe('validateData', () => {
  it('should throw error if data contains a non string', () => {
    const errorMsg = /[*]?is not a valid area code/
    const data = ['AAA', 123, 'ABC']
    validateData(AirportCodeValidator, (data as string[]))
  })
})