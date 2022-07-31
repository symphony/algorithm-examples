import _ from 'lodash';
import { AirportCodeValidator, validateData } from './helpers/AirportCodeValidator';
import airportCodes from './data/airport-codes.json';

// types
type AirportCode = string;

export const searchGraph = (graph: object): boolean => {
  // the graph
  const adjacencyList = new Map();
  return graph ? true : false;
};

// = test runner =
// test input data
validateData(AirportCodeValidator, airportCodes);

// data valid, continue search
const airports: AirportCode[] = airportCodes;
searchGraph(airports)