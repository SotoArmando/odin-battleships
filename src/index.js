function positionCalculator(position = 0, data) {
    return {
        position,
        goLeft: function (number) {
            let error = undefined;
            error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined
            if (error) {
                return error;
            } else {
                this.position -= 1;
                return (this.position);
            }
        },
        goRight: function (number) {
            let error = undefined;
            error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined
            if (error) {
                return error;
            } else {
                this.position += 1;
                return (this.position);
            }
        },
        goUp: function (number) {
            let error = undefined;
            error = (number > 89) ? 'There is no more board to do that' : undefined
            if (error) {
                return error;
            } else {
                this.position += 10;
                return (this.position);
            }
        },
        goDown: function (number) {
            let error = undefined;
            error = (number < 10) ? 'There is no more board to do that' : undefined
            if (error) {
                return error;
            } else {
                this.position -= 10;
                return (this.position);
            }
        },
        isSomethingThere: function (vertex, size) {
                
            let yes = false;
            this.position = vertex.position;
            let positions = []
            let positionbi = positionIn(vertex.position)

            switch (vertex.direction) {
                case 0:
                    if (positionbi.y + size > 7) {
                        return true;
                    }
                    break;
                case 1:
                    if (positionbi.x + size > 7) {
                        return true;
                    }
                    break;
                case 2:
                    if (positionbi.y - size < 1) {
                        return true;
                    }
                    break;
                case 3:
                    if (positionbi.x - size < 1) {
                        return true;
                    }
                    break;
            }

            for (let i = 0; i < size; i++) {
                console.log(yes, vertex.position, size, data[this.position]);
                positions.push(this.position)

                switch (vertex.direction) {
                    case 0:
                        yes = (data[this.position]) ? true : yes;
                        this.goUp()
                        break;
                    case 1:
                        yes = (data[this.position]) ? true : yes;
                        this.goRight()
                        break;
                    case 2:
                        yes = (data[this.position]) ? true : yes;
                        this.goDown()
                        break;
                    case 3:
                        yes = (data[this.position]) ? true : yes;
                        this.goLeft()
                        break;
                }
            }

            if (!yes) {
                positions.forEach(position => {
                    data[position] = true;
                });
            }

            return yes;
        },

        allpositions: function (vertex, size) {
            this.position = vertex.position;
            let positions = []


            for (let i = 0; i < size; i++) {
                positions.push(this.position)
                switch (vertex.direction) {
                    case 0:
                        this.goUp()
                        break;
                    case 1:
                        this.goRight()
                        break;
                    case 2:
                        this.goDown()
                        break;
                    case 3:
                        this.goLeft()
                        break;
                }
            }
            return positions;
        }
    }
}

function positionIn(x) {
    let rows = 10;
    let columns = 10;
    let xismorethanonerow = (x > columns);
    if (xismorethanonerow) {
        return {
            x: x % columns,
            y: Math.floor(x / rows)
        }
    } else {
        return {
            x,
            y: 0
        };
    }
}

function positionOut({
    x,
    y
}) {
    let rows = 10;
    let columns = 10;
    return ((y * rows) + x);
}

function ship({
    size,
    position,
    direction
}) {
    return {
        lives: {
            size,
            hit: []
        },
        size,
        vertex: {
            position,
            direction
        },
        isInit: false,

        hit: function (position) {
            if (!this.lives.hit[position.toString()]) {
                this.lives.hit[position.toString()] = true;
            }
        },
        takedown: function () {
            error = undefined;
            error = (this.lives == 0) ? 'This ship is gone and the cell is marked' : undefined;
            if (error) {
                return error;
            } else {
                this.lives -= 1;
            }
        }
    }
}

function player(index, data = [...(" ".repeat(100).split("").map(function (value) {
    return false
}))], strikes = [...(" ".repeat(100).split("").map(function (value) {
    return false
}))]) {
    return {
        data,
        strikes,
        index,
        renderer: render(),
        initPlayer: function () {
            this.renderer.initBoards();
        },
        chips: [2, 3, 4, 4, 2, 2, 3, 6].map(function (size) {
            let thisship = undefined;
            if (!this.renderer) {
                this.renderer = render();
            }
            if (!this.data) {
                this.data = data
            }
            if (!this.strikes) {
                this.strikes = strikes
            }

            while (true) {
                let position = Math.floor(Math.random() * 99);
                let direction = Math.floor(Math.random() * 4);

                if (!positionCalculator(0, this.data).isSomethingThere({
                    position,
                    direction
                }, size)) {

                    thisship = ship({
                        size,
                        position,
                        direction
                    })
                    break;
                }
            }


            this.renderer.addShip(index, positionCalculator(0, this.data).allpositions(thisship.vertex, thisship.size), thisship.vertex, thisship.size);
            return thisship;

        }),
        strike: function (position) {
            debugger;
            let error = undefined;
            if (!this.renderer) {
                this.renderer = render();
            }
            if (!this.data) {
                this.data = data
            }
            if (!this.strikes) {
                this.strikes = strikes
            }


            if (error) {
                return error
            } else {
                this.data[position] = true;
            }
            console.log(this.data);
            this.renderer.strikePosition(this.index, position,this.data[position])
        },

    }
}


function render() {
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
                    console.log(elem.getAttribute('data-size'), elem.getAttribute('data-playerindex'), elem.getAttribute('data-direction'))
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

                    console.log(positions)
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

                    console.log(positions)
                });

                initialized = true;
            });

        }

        initialized = true;
    }

    return {
        cleanBoard: function (index = 0) {

        },
        addShip: function (playerindex, allpositions, vertex, size) {
            debugger;

            let color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;
            console.log(color);
            allpositions.forEach(function (position) {

                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');
                if (playerindex == 0) {
                    document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;
                }


            })
            return allpositions;
        },
        initBoards: function () {
            document.querySelector("#span_player1_label").innerHTML = "Board - Player 1</span><br />Its your turn, play!"
            document.querySelector("#span_player2_label").innerHTML = "Board - Player 2</span><br />Auto player"
            //                    if (playerindex == 0) {
            //                        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).addEventListener("click", function(listener) {
            //                            debugger;
            //                            openShipMove(playerindex, vertex, size);
            //                        })
            //                    } else {
            //                        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).addEventListener("click", function(listener) {
            //                            debugger;
            //                            openShipMove(playerindex, vertex, size);
            //                        })
            //                    }
        },
        strikePosition: function (playerindex, position, done) {
            debugger;
            
            if (document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('active')) {
                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked');
            } else if (!document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('striked')) {
                document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked1');
            }
            document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.remove('active');
            
        },
    };
}

function board() {
    return {
        isPlayerOne: true,
        players: [player(0), player(1)],
        showWinner: function (player) {
            return `There is a winner ${player}`
        },
        initBoard: function () {
            this.players[0].initPlayer();
            this.players[1].initPlayer();

        },
        rollTurns: function (position) {
            debugger;
            if (this.isPlayerOne) {
                this.players[1].strike(position);
            } else {
                this.players[1].strike(position);
            }
            this.isPlayerOne = !this.isPlayerOne;
        }

    }
}

function app() {

    return {
        initGame: function () {
            let thisboard = board();
            document.querySelector("#span_play").addEventListener("click", function () {

                thisboard.initBoard();
                document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener("click", function (listener) {
                    debugger;
                    thisboard.rollTurns(this.getAttribute('data-id'))
                }))
            })
        }

    }
}

app().initGame();