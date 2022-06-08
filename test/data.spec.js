import { listAZ, listZA, genderFilter } from '../src/data.js';


describe('order movies from A to Z', () => {
  let dataMovies = [{"title": "Kiki's Delivery Service"},{"title": "My Neighbor Totoro"},{"title": "Castle in the Sky"}]
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
