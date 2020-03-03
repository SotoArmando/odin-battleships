import Board from './Objects/board';

function app() {
  return {
    initGame: () => {
      const thisboard = Board();
      document.querySelector('#span_reset').addEventListener('click', () => {
        thisboard.reset();
      });
      document.querySelector('#span_play').addEventListener('click', () => {
        thisboard.initBoard(thisboard);
      });
    },
  };
}

app().initGame();
