import airportCodes from '../fixtures/airport-codes.json';
import AirportCodeValidator from './AirportCodeValidator';

// types
type AirportCode = string;

const validateData = (validator: typeof AirportCodeValidator, data: string[]): never | void => {
  const v = new validator;

  const found = (data.find((s: string) => !v.isAcceptable(s)));
  if (found) throw new Error('Not a valid area code');
  console.log('All codes valid');
};


// test data
const airports: AirportCode[] = [];

export const searchGraph = (graph: object): boolean => {
  // the graph
  const adjacencyList = new Map();
  return graph ? true : false;
};

validateData(AirportCodeValidator, airportCodes);