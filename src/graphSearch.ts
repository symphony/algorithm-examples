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

  // bfs search
  breadthSearch = (start: Node, item: Node) => {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
      const current = queue.shift();
      const connections = this.adjacencyList.get(current) ?? [];
      for (const node of connections) {
        if (node === item) console.log('Found it');

        if (!visited.has(node)) {
          visited.add(node);
          queue.push(node);
          console.log(node);
        }
      }

    }

    return false;
  };
};

export class AirportGraph extends Graph { };

// functions
export const searchGraph = (graph: Graph, start: Node, item: string): boolean => {
  validateData(AirportCodeValidator, graph.nodes);
  return graph.breadthSearch(start, item);
};
