import Board from '../src/objects/board';

describe('Board', () => {
  const board = Board(false);
  const brandboard = [...(' '.repeat(100).split('').map(value => false))];


  it('player 0 is first player', () => {
    expect(board.isPlayerOne).toEqual(true);
  });

  it('there must be 2 players', () => {
    expect(board.players.length).toEqual(2);
  });

  it('it has a show_winner feature', () => {
    expect(board.showWinner).not.toBeUndefined();
  });

  it('it has a initialize_boards feature', () => {
    expect(board.initBoard).not.toBeUndefined();
  });

  it('it has a reset feature', () => {
    expect(board.reset).not.toBeUndefined();
  });

  it('it has a roll_turns feature', () => {
    expect(board.rollTurns).not.toBeUndefined();
  });

  it('there must be 2 players', () => {
    expect(board.players.length).not.toBeUndefined();
  });
});
