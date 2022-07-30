import _ from 'lodash';
import AirportCodeValidator from './AirportCodeValidator';
import airportCodes from '../fixtures/airport-codes.json';

// types
type AirportCode = string;

export const validateData = (Validator: typeof AirportCodeValidator, data: string[]): void => {
  const v = new Validator;

  airportCodes.forEach((code, i) => {
    if (!v.isAcceptable(code)) throw new Error(String(i) +  String(code) + ' is not a valid area code');
  });
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