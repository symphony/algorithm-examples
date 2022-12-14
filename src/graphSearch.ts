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

  // bfs
  breadthSearch = (start: Node, item: Node) => {
    if (!start || !item) throw new Error('Missing parameters');

    const visited = new Set();
    const queue = [start];
    const foundRoutes = [];
    const currentRoute = [start];

    while (queue.length > 0) {
      const current = queue.shift();
      const connections = this.adjacencyList.get(current) ?? [];
      // @ts-expect-error /* this error shouldn't be possible */
      currentRoute.push(current);

      for (const node of connections) {
        currentRoute.push(node)

        if (node === item) {
          // save and reset current route
          foundRoutes.push([...currentRoute]);
          currentRoute.splice(2);
        }

        if (!visited.has(node)) {
          visited.add(node);
          queue.push(node);
        }
      }

      currentRoute.splice(1);
    }

    return foundRoutes.length ? foundRoutes : null;
  };

  // dfs
  depthSearch = (start: Node, item: Node, visited = new Set()): Node[] | null => {
    if (!start || !item) throw new Error('Missing parameters');

    const route = [start];
    if (start === item) return route;
    visited.add(start)

    const connections = this.adjacencyList.get(start) ?? [];
    for (const node of connections) {
      if (visited.has(node)) continue;
      const found = this.depthSearch(node, item, visited);
      if (found) return route.concat(found)
    }

    return null;
  };
};

export class AirportGraph extends Graph { };

// functions
export const searchGraph = (graph: Graph, start: Node, item: string) => {
  validateData(AirportCodeValidator, graph.nodes);
  return graph.depthSearch(start, item);
  return graph.breadthSearch(start, item);
};
