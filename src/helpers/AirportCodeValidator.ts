const numberRegexp = /^[A-Z]+$/;

/** = checks for all caps and length of 3 characters =  */
class AirportCodeValidator {
  isAcceptable(s: string): boolean {
    return s.length === 3 && numberRegexp.test(s);
  }
};

export default AirportCodeValidator;