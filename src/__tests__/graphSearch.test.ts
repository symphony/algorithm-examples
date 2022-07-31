import { AirportGraph, searchGraph, } from '../graphSearch';

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
] as [string, string][];

// = Classes =
describe('AirportGraph', () => {
  it('should instantiate the graph', () => {
    const data = ['YVR', 'NRT'];
    const graph = new AirportGraph(data, []);

    expect(graph.nodes).toBe(data);
    expect(graph.nodes).toStrictEqual(['YVR', 'NRT']);
    expect(graph.nodes).not.toBe(['YVR', 'NRT']);
  });

  it('should build a map', () => {
    const data = ['YVR', 'NRT', 'BOB'];
    const graph = new AirportGraph(data, [['YVR', 'NRT']]);
  });

  it('should create routes', () => {
    const graph = new AirportGraph(airports, routes);

    expect(graph.adjacencyList.get('BKK'));
  });

  it('should retrieve the correct routes', () => {
    const data = ['YVR', 'NRT', 'BOB'];
    const graph = new AirportGraph(data, [['YVR', 'NRT']]);

    expect(graph.adjacencyList.get('YVR')).toContain('NRT');
    expect(graph.adjacencyList.get('BOB')).toHaveLength(0);
  });
});

// = Functions =
describe('searchGraph', () => {
  it('shall pass', () => {
    expect(typeof searchGraph).toBe('function');
  });

  it('should have error handling', () => {
    expect(() => { searchGraph(new AirportGraph(['NT'], []), 'start', 'item') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['123'], []), 'start', 'item') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['Hey'], []), 'start', 'item') }).toThrow();
    expect(() => { searchGraph(new AirportGraph(['HELLO'], []), 'start', 'item') }).toThrow();
    // @ts-expect-error
    expect(() => { searchGraph(new AirportGraph(['YES'], ), 'start', 'item') }).toThrow();
  });

  it('should handle empty arrays', () => {
    // @ts-expect-error
    expect(() => { searchGraph(new AirportGraph([], []), undefined, undefined ) }).not.toThrow();
  });

  it('should find the item in the graph', () => {
    const graph = new AirportGraph(airports, routes);

    expect(searchGraph(graph, 'PHX', 'BKK')).toStrictEqual([['PHX', 'MEX', 'LAX', 'BKK'], ['PHX', 'LIM', 'MEX', 'BKK']]);
  });

  it('should return empty array if item is not found', () => {
    const graph = new AirportGraph(airports, routes);

    expect(searchGraph(graph, 'PHX', 'DOG')).toStrictEqual([]);
  });

  // todo: complexity tests
});
