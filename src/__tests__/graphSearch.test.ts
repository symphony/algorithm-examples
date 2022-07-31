import { searchGraph, AirportGraph, Edge } from '../graphSearch';

// = Fixtures =
const airports = ['PHX', 'BKK', 'OKC', 'JFK', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM',];
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
] as Edge[];

// = Classes =
describe('Graph', () => {
  it('should instantiate the graph', () => {
    const data = ['YVR', 'NRT'];
    const graph = new AirportGraph(data, []);

    expect(graph.nodes).toBe(data);
    expect(graph.nodes).toStrictEqual(['YVR', 'NRT']);
    expect(graph.nodes).not.toBe(['YVR', 'NRT']);
  });

  it('should build a graph', () => {
    const data = ['YVR', 'NRT', 'BOB'];
    const graph = new AirportGraph(data, [['YVR', 'NRT']]);

    console.log('Graph:', graph.adjacencyList);
  });
});

// = Functions =
describe('searchGraph', () => {
  it('shall pass', () => {
    expect(typeof searchGraph).toBe('function');
  });

  it('should have error handling', () => {
    expect(() => { searchGraph(new AirportGraph(['NT'], []), 'any') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['123'], []), 'any') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['Hey'], []), 'any') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['HELLO'], []), 'any') }).toThrow();
    // @ts-expect-error
    expect(() => { searchGraph(new AirportGraph(['YES'], undefined), 'any') }).toThrow();
    // @ts-expect-error
    expect(() => { searchGraph(new AirportGraph([], []), undefined) }).not.toThrow(); // should throw?
  });

  it('should retrieve the correct routes', () => {
    const data = ['YVR', 'NRT', 'BOB'];
    const graph = new AirportGraph(data, [['YVR', 'NRT']]);

    expect(searchGraph(graph, 'YVR')).toContain('NRT');
    expect(searchGraph(graph, 'BOB')).toHaveLength(0);
  });

  it('should find the item in the graph', () => {
    const graph = new AirportGraph(airports, routes);

    expect(searchGraph(graph, 'BKK'));
  });
  // todo: complexity tests
});
