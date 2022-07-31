const numberRegexp = /^[A-Z]+$/;

/** = checks for all caps and length of 3 characters =  */
export class AirportCodeValidator {
  isAcceptable(s: string): boolean {
    return s.length === 3 && numberRegexp.test(s);
  }
};

export const validateData = (Validator: typeof AirportCodeValidator, data: string[]): boolean => {
  const v = new Validator;

  data.forEach((code, i) => {
    if (!v.isAcceptable(code)) throw new Error(String(i) + String(code) + ' is not a valid area code');
  });

  return true;
};