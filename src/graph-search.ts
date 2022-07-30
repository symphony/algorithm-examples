import _ from 'lodash';
import AirportCodeValidator from './AirportCodeValidator';
import airportCodes from '../fixtures/airport-codes.json';

// types
type AirportCode = string;

export const validateData = (Validator: typeof AirportCodeValidator, data: string[]): void => {
  const v = new Validator;

  const found = (data.find((s: string) => !v.isAcceptable(s)));
  if (found) throw new Error(String(found) + ' is not a valid area code');
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