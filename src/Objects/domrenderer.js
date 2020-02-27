import { positionIn, positionOut, positionCalculator } from './positionCalculator';

export default function render() {
    let initialized = false;

    function openShipMove(playerindex, vertex, size) {

        let elementsArray = document.querySelectorAll(`cells[data-playerid='${playerindex}'] > item`);
        if (initialized) {
            elementsArray.forEach(function (elem) {
                elem.classList.remove('opened')
                elem.setAttribute('data-size', size)
                elem.setAttribute('data-playerindex', playerindex)
                elem.setAttribute('data-direction', vertex.direction)

            });
        } else {
            elementsArray.forEach(function (elem) {

                elem.setAttribute('data-size', size)
                elem.setAttribute('data-playerindex', playerindex)
                elem.setAttribute('data-direction', vertex.direction)

                elem.addEventListener("mouseenter", function () {
                    let descicions = positionCalculator(parseInt(elem.getAttribute('data-id')));
                    let hoveredArray = document.querySelectorAll(`cells[data-playerid='${elem.getAttribute('data-playerindex')}'] > item`);
                    let positions = []
                    for (let i = 0; i < elem.getAttribute('data-size'); i++) {
                        document.querySelector(`cells[data-playerid='${elem.getAttribute('data-playerindex')}'] > item[data-id='${descicions.position}']`).classList.add('opened')
                        switch (parseInt(elem.getAttribute('data-direction'))) {
                            case 0:
                                descicions.goUp()
                                break;
                            case 1:
                                descicions.goRight()
                                break;
                            case 2:
                                descicions.goDown()
                                break;
                            case 3:
                                descicions.goLeft()
                                break;
                        }

                    }

                });

                elem.addEventListener("mouseleave", function () {
                    let descicions = positionCalculator(parseInt(elem.getAttribute('data-id')));
                    let hoveredArray = document.querySelectorAll(`cells[data-playerid='${elem.getAttribute('data-playerindex')}'] > item`);
                    let positions = []
                    for (let i = 0; i < elem.getAttribute('data-size'); i++) {
                        positions.push(descicions.position);
                        document.querySelector(`cells[data-playerid='${elem.getAttribute('data-playerindex')}'] > item[data-id='${descicions.position}']`).classList.remove('opened')
                        switch (parseInt(elem.getAttribute('data-direction'))) {
                            case 0:
                                descicions.goUp()
                                break;
                            case 1:
                                descicions.goRight()
                                break;
                            case 2:
                                descicions.goDown()
                                break;
                            case 3:
                                descicions.goLeft()
                                break;
                        }

                    }

                });

                initialized = true;
            });

        }

        initialized = true;
    }

    return {
        addShip: function (playerindex, allpositions, vertex, size) {
            debugger;

            let color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;
            allpositions.forEach(function (position) {

                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');
                if (playerindex == 0) {
                    document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;
                }


            })
            return allpositions;
        },
        initEventListeners: function (board) {
            document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener("click", function abc(listener) {
                debugger;
                board.rollTurns(this.getAttribute('data-id'));
                board.rollTurns(Math.floor(Math.random() * 99));
            }))
        },
        reset: function () {
            document.querySelectorAll("cells > item").forEach((e, v) => { e.classList.remove("active"); e.classList.remove("striked"); e.classList.remove("striked1"); e.style.backgroundColor = ""; });
            document.querySelector("#span_player1_label").innerHTML = '<span style="font-weight: 600;">Board - Player 1</span><br />Press play to begin'
            document.querySelector("#span_player2_label").innerHTML = '<span style="font-weight: 600;">Board - CPU</span><br />Press play to begin'
            document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));
            document.querySelector(`#span_score[data-playerid='${0}']`).innerHTML = 26
            document.querySelector(`#span_score[data-playerid='${1}']`).innerHTML = 26
        },
        renderLabels: function () {
            document.querySelector("#span_player1_label").innerHTML = '<span style="font-weight: 600;">Board - Player 1</span><br />Its your turn, play!'
            document.querySelector("#span_player2_label").innerHTML = '<span style="font-weight: 600;">Board - CPU</span><br />Auto player'
        },
        strikePosition: function (playerindex, position, done) {
            debugger;

            if (document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('active')) {
                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked');
                let otherplayer = (playerindex === 1) ? 0 : 1;
                document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML = parseInt(document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML) - 1
                if (document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML === "0") {
                    document.querySelector("#span_player1_label").innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`
                    document.querySelector("#span_player2_label").innerHTML = `<span style="font-weight: 600;">There is a winner!</span><br />Congrats! Player ${otherplayer}`
                    document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));
                }
            } else if (!document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('striked')) {
                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked1');
            }
            document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.remove('active');

        },
    };
}