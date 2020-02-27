
import Board from './Objects/board';

function app() {

  return {
    initGame: function () {
      var thisboard = Board();
      document.querySelector("#span_reset").addEventListener("click", function () {
        thisboard.reset();
      })
      document.querySelector("#span_play").addEventListener("click", function () {
        thisboard.initBoard();
      })
    }

  }
}

app().initGame();
