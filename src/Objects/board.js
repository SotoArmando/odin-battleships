import Player from './player';

export default (playerrender = true) => {
  const players = [Player(0, null, null, playerrender), Player(1, null, null, playerrender)];
  let isPlayerOne = true;

  return {
    showWinner: player => `There is a winner ${player}`,
    initBoard: (board) => {
      players[0].initallevents(board);
      players[0].initPlayer();
      players[1].initPlayer();
    },
    reset: () => {
      debugger
      players[0].renderreset();
      players[0].reset(0);
      players[1].reset(1);
    },
    rollTurns: (position) => {
      if (isPlayerOne) {
        players[1].strike(position);
      } else {
        players[0].strike(position);
      }
      isPlayerOne = !isPlayerOne;
    },
  };
}
