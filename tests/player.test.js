import Player from '../src/objects/player';

describe('Player', () => {
  const player = Player(1, null, null, false);
  const brandboard = [...(' '.repeat(100).split('').map(value => false))];

  it('has a board', () => {
    expect(player.data).toEqual(brandboard);
  });

  it('has a strikable board ', () => {
    expect(player.strikes).toEqual(brandboard);
  });

  it('has its player index 1', () => {
    expect(player.index).toEqual(1);
  });

  it('has its dom renderer', () => {
    expect(player.renderer).not.toBeUndefined();
  });

  it('has its reset feature', () => {
    expect(player.reset).not.toBeUndefined();
  });

  it('has its strike feature', () => {
    expect(player.strike).not.toBeUndefined();
  });

  it('Loads its ships', () => {
    expect(player.data.includes(false)).toBe(true);
  });
});
