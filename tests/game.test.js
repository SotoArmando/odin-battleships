import Ship from '../src/objects/ship';

describe('Ship', () => {
  const ship = Ship(4);

  it('has a length', () => {
    expect(ship.length).toEqual(4);
  });

  it('has a hit function', () => {
    expect(typeof ship.hit).toBe('function');
  });

  it('has an isSunk function', () => {
    expect(typeof ship.isSunk).toBe('function');
  });

  it('sinks when all positions have been hit', () => {
    const ship2 = Ship(2);
    expect(ship2.isSunk()).toBe(false);
    ship2.hit(0);
    expect(ship2.isSunk()).toBe(false);
    ship2.hit(1);
    expect(ship2.isSunk()).toBe(true);
  });

  it('modifies positions when hit', () => {
    ship.hit(1);
    expect(ship.positions).toEqual([false, true, false, false]);
  });
});