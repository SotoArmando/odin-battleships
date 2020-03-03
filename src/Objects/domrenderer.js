

export default function render() {
  return {
    addShip: (playerindex, allpositions) => {
      debugger
      const color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;
      allpositions.forEach((position) => {
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');
        if (playerindex === 0) {
          document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;
        }
      });
      return allpositions;
    },
    initEventListeners: (board) => {
      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener('click', () => {
        board.rollTurns(x.getAttribute('data-id'));
        board.rollTurns(Math.floor(Math.random() * 99));
      }));
    },
    reset: () => {
      document.querySelectorAll('cells > item').forEach((e) => { e.classList.remove('active'); e.classList.remove('striked'); e.classList.remove('striked1'); e.style.backgroundColor = ''; });
      document.querySelector('#span_player1_label').innerHTML = '<span style="font-weight: 600;">Board - Player 1</span><br />Press play to begin';
      document.querySelector('#span_player2_label').innerHTML = '<span style="font-weight: 600;">Board - CPU</span><br />Press play to begin';
      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));
      document.querySelector(`#span_score[data-playerid='${0}']`).innerHTML = 26;
      document.querySelector(`#span_score[data-playerid='${1}']`).innerHTML = 26;
    },
    renderLabels: () => {
      document.querySelector('#span_player1_label').innerHTML = '<span style="font-weight: 600;">Board - Player 1</span><br />Its your turn, play!';
      document.querySelector('#span_player2_label').innerHTML = '<span style="font-weight: 600;">Board - CPU</span><br />Auto player';
    },
    strikePosition: (playerindex, position) => {
      if (document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('active')) {
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked');
        const otherplayer = (playerindex === 1) ? 0 : 1;
        document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML = parseInt(document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML, 10) - 1;
        if (document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML === '0') {
          document.querySelector('#span_player1_label').innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`;
          document.querySelector('#span_player2_label').innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`;
          document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));
        }
      } else if (!document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('striked')) {
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked1');
      }
      document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.remove('active');
    },
  };
}
