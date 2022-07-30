import _ from 'lodash';
import AirportCodeValidator from './AirportCodeValidator';
import airportCodes from '../data/airport-codes.json';

// types
type AirportCode = string;

// validation
export const validateData = (Validator: typeof AirportCodeValidator, data: string[]): void => {
  const v = new Validator;

  data.forEach((code, i) => {
    if (!v.isAcceptable(code)) throw new Error(String(i) + String(code) + ' is not a valid area code');
  });
  console.log('- All codes valid -');
};

export const searchGraph = (graph: object): boolean => {
  // the graph
  const adjacencyList = new Map();
  return graph ? true : false;
};

// test runner
validateData(AirportCodeValidator, airportCodes);

const airports: AirportCode[] = airportCodes;
searchGraph(airports)