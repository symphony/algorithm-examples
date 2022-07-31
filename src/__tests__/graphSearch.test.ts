import { searchGraph, AirportGraph } from '../graphSearch';

describe('searchGraph', () => {

  it('shall pass', () => {
    expect(typeof searchGraph).toBe('function');
  });

  it('should instantiate the graph', () => {
    const data = ['YVR', 'NRT'];
    const graph = new AirportGraph(data);

    expect(graph.nodes).toBe(data);
    expect(graph.nodes).toStrictEqual(['YVR', 'NRT']);
    expect(graph.nodes).not.toBe(['YVR', 'NRT']);
  });

  it('should find the item in the graph', () => {
    const data = ['YVR', 'NRT'];
    const graph = new AirportGraph(data);

    expect(searchGraph(graph, 'YVR')).toBe(true);
  });

  // todo: complexity tests
});
