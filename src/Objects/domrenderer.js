

export default function render() {
  let canrollturns = true;
  return {
    addShip: (playerindex, allpositions, arrid) => {
      
      const color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;
      allpositions.forEach((position) => {
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute("data-lives", allpositions.length);
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute("data-name", allpositions.length);
        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute("data-arrid", arrid);
        if (playerindex === 0) {
          document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;
        }
      });
      return allpositions;
    },
    initEventListeners: (board) => {
      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener('click', () => {
        if (canrollturns && !x.classList.contains('striked') && !x.classList.contains('striked1')) {
          canrollturns = false;
          let arrid = x.getAttribute('data-arrid');
          board.rollTurns(parseInt(x.getAttribute('data-id'),10), arrid);
          let otherplayercell = Math.floor(Math.random() * 99);
          let option = document.querySelector(`cells[data-playerid='0'] > item[data-id='${otherplayercell}']`);
          while (option.classList.contains('striked1') || option.classList.contains('striked')) {
            if (otherplayercell < 99) {
              otherplayercell += 1;
            } else {
              
              otherplayercell = 0;
            }
            option = document.querySelector(`cells[data-playerid='0'] > item[data-id='${otherplayercell}']`)
          }
          board.rollTurns(otherplayercell, option.getAttribute('data-arrid'));
          canrollturns = true;
        } 
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
    strikePosition: (playerindex, position, shipname, arrid) => {

      let positioncell = document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`);
      if (positioncell.classList.contains('active')) {
        positioncell.classList.add('striked');
        const otherplayer = (playerindex === 1) ? 0 : 1;
        document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML = parseInt(document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML, 10) - 1;
        let lives = positioncell.getAttribute("data-lives");
        if (lives == 1) {
          
          let playerspanlog = document.querySelector(`span#span_log[data-playerid='${otherplayer}']`)
          playerspanlog.innerHTML = `The player ${otherplayer} has striked down the <b>${shipname}</b>!`
        } else {
          
          lives -= 1;
          document.querySelectorAll(`cells[data-playerid='${playerindex}'] > item[data-arrid='${arrid}']`).forEach(cell => cell.setAttribute("data-lives", lives))
        }

        if (document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML === '0') {
          document.querySelector('#span_player1_label').innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`;
          document.querySelector('#span_player2_label').innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`;
          document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));
        }
      } else if (!positioncell.classList.contains('striked')) {
        positioncell.classList.add('striked1');
      }
      positioncell.classList.remove('active');
    },
  };
}
