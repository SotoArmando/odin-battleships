import Player from './player'

export default function board(playerrender = true) {
  return {
    isPlayerOne: true,
    players: [Player(0, null, null, playerrender), Player(1, null, null, playerrender)],
    showWinner: function (player) {
      return `There is a winner ${player}`
    },
    initBoard: function () {
      this.players[0].initallevents(this);
      this.players[0].initPlayer();
      this.players[1].initPlayer();


    },
    reset: function () {
      this.players[0].renderreset();
      this.players[0].reset(0);
      this.players[1].reset(1);
    },
    rollTurns: function (position) {
      debugger;
      if (this.isPlayerOne) {
        this.players[1].strike(position);
      } else {
        this.players[0].strike(position);
      }
      this.isPlayerOne = !this.isPlayerOne;
    }

  }
}
