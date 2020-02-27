import Ship from '../src/objects/ship';

describe('Ship', () => {
  const ship = Ship({ size: 4, position: 0, direction: 0 });

  it('has a size', () => {
    expect(ship.size).toEqual(4);
  });

  it('has a marked position', () => {
    expect(ship.vertex.position).toEqual(0);
  });

  it('has a marked direction', () => {
    expect(ship.vertex.direction).toEqual(0);
  });

  it('has a hit function', () => {
    expect(typeof ship.hit).toBe('function');
  });


  it('has an isSunk function', () => {
    expect(typeof ship.isSunk).toBe('function');
  });

  it('sinks when all positions have been hit', () => {
    const ship2 = Ship({ size: 4, position: 0, direction: 0 });
    expect(ship2.isSunk()).toBe(false);
    ship2.hit();
    expect(ship2.isSunk()).toBe(false);
    ship2.hit();
    expect(ship2.isSunk()).toBe(false);
    ship2.hit();
    expect(ship2.isSunk()).toBe(false);
    ship2.hit();

    expect(ship2.isSunk()).toBe(true);
  });
});
