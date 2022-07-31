import _ from 'lodash';
import { AirportCodeValidator, validateData } from './helpers/AirportCodeValidator';
import airportCodes from './data/airport-codes.json';

// types
type AirportCode = string;
type AirportCodes = AirportCode[];

export class Graph {
  public adjacencyList;
  public nodes;

  constructor(nodes: string[]) {
    this.adjacencyList = new Map();
    this.nodes = nodes

    this.nodes.forEach(this.addNode)
  }

  // add node
  addNode = (node: string) => {
    this.adjacencyList.set(node, []);
  };

  // add edge, undirected
  addEdge = (origin: string, destination: string) => {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  };
};

export class AirportGraph extends Graph { };

export const searchGraph = (graph: Graph, item: string): boolean => {
  validateData(AirportCodeValidator, graph.nodes);

  console.log(graph.adjacencyList);
  return graph.adjacencyList.get(item); // test return
};
