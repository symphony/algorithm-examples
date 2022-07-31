import _ from 'lodash';
import { AirportCodeValidator, validateData } from './helpers/AirportCodeValidator';

// types
type Node = string;
type Edge = [Node, Node];

// classes
export class Graph {
  public adjacencyList;
  public nodes;
  public edges;

  constructor(nodes: Node[], edges: Edge[]) {
    this.adjacencyList = new Map();
    this.nodes = nodes;
    this.edges = edges;

    // build graph
    this.nodes.forEach(this.addNode);
    this.edges.forEach((edge) => { this.addEdge(...edge) })
  };

  // add node
  addNode = (node: Node) => {
    this.adjacencyList.set(node, []);
  };

  // add edge, undirected
  addEdge = (origin: Node, destination: Node) => {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  };
};

export class AirportGraph extends Graph { };

// functions
export const getRoutes = (graph: Graph, item: string): boolean => {
  validateData(AirportCodeValidator, graph.nodes);

  return graph.adjacencyList.get(item);
};

export const searchGraph = (graph: Graph, item: string): boolean => {
  return graph.adjacencyList.get(item);
};
