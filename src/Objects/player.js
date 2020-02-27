import { positionIn, positionOut, positionCalculator } from './positionCalculator';
import render from './domrenderer';
import ship from './ship';


export default function player(
  index,
  data = [...(' '.repeat(100).split('').map((value) => false))], strikes = [...(' '.repeat(100).split('').map((value) => false))], playerrender = true,
) {
  return {
    data: [...(' '.repeat(100).split('').map((value) => false))],
    strikes: [...(' '.repeat(100).split('').map((value) => false))],
    index,
    renderer: render(),
    initallevents: (board) => {
      this.renderer.initEventListeners(board);
    },
    renderreset: () => {
      this.renderer.reset();
    },
    reset() {
      debugger;
      const newdata = [...(' '.repeat(100).split('').map((value) => {
        return false
      }))];
      this.data = newdata;
      this.strikes = newdata;
      const a = this.data;
      const b = this.index;
      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {
        debugger
        let thisship = undefined;

        let i = 0;
        while (true) {
          i += 1;
          let position = Math.floor(Math.random() * 99);
          let direction = Math.floor(Math.random() * 4);

          if (!positionCalculator(0, newdata).isSomethingThere({
            position,
            direction
          }, size)) {

            thisship = ship({
              size,
              position,
              direction
            })
            break;
          } else {
            if (i > 1000) {
              break;
            }
          }
        }

        render().addShip(b, positionCalculator(0, a).allpositions(thisship.vertex, thisship.size), thisship.vertex, thisship.size);

        return thisship;

      });

    },
    initPlayer: () => {
      this.renderer.renderLabels();
    },
    chips: (function () {
      debugger;
      [2, 3, 4, 4, 2, 2, 3, 6].map((size, index) => {
        debugger
        let thisship = undefined;


        let i = 0;

        if (playerrender) {
          while (true) {
            i += 1;
            let position = Math.floor(Math.random() * 99);
            let direction = Math.floor(Math.random() * 4);

            if (!positionCalculator(0, data).isSomethingThere({
              position,
              direction
            }, size)) {

              thisship = ship({
                size,
                position,
                direction
              })
              break;
            } else {
              if (i > 1000) {
                break;
              }
            }
          }
          render().addShip(index, positionCalculator(0, data).allpositions(thisship.vertex, thisship.size), thisship.vertex, thisship.size);
        }
        else {
          thisship = ship({
            size,
            index,
            direction: 0,
          })
        }


        return thisship;

      });
    }()),
    strike: (position) => {
      debugger;
      const error;
      if (!this.renderer) {
        this.renderer = render();
      }
      if (!this.data) {
        this.data = data;
      }
      if (!this.strikes) {
        this.strikes = strikes;
      }


      if (error) {
        return error;
      }
      this.data[position] = true;


      this.renderer.strikePosition(this.index, position, this.data[position]);
    },

  };
}
