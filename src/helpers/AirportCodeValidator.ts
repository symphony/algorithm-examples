// = functions =
export const validateData = (Validator: typeof AirportCodeValidator, data: string[]): boolean => {
  const v = new Validator;

  data.forEach((string, i) => {
    if (!v.isAcceptable(string)) throw new Error(`"${String(string)}" at index [${String(i)}] is not a valid area code`);
  });

  return true;
};

// = classes =
/** checks for all caps and length of 3 characters  */
export class AirportCodeValidator {
  capsRegExp: RegExp = /^[A-Z]+$/;

  isAcceptable(s: string): boolean {
    return s.length === 3 && this.capsRegExp.test(s);
  }
};
