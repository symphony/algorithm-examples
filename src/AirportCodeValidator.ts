const numberRegexp = /^[A-Z]+$/;

class AirportCodeValidator {
  isAcceptable(s: string): boolean {
    return s.length === 3 && numberRegexp.test(s);
  }
};

export = AirportCodeValidator;