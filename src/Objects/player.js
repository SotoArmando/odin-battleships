import positionCalculator from './positionCalculator';
import render from './domrenderer';
import ship from './ship';


export default function player(
  index,
  data = [...(' '.repeat(100).split('').map(() => false))], strikes = [...(' '.repeat(100).split('').map(() => false))], playerrender = true,
) {
  return {
    data: [...(' '.repeat(100).split('').map(() => false))],
    strikes: [...(' '.repeat(100).split('').map(() => false))],
    index,
    renderer: render(),
    initallevents: (board) => {
      this.renderer.initEventListeners(board);
    },
    renderreset: () => {
      this.renderer.reset();
    },
    reset() {
      const newdata = [...(' '.repeat(100).split('').map(() => false))];
      this.data = newdata;
      this.strikes = newdata;
      const a = this.data;
      const b = this.index;
      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {
        let i = 0;
        let thisship = ship(size, 0, 0);
        while (i < 5000) {
          i += 1;
          const position = Math.floor(Math.random() * 99);
          const direction = Math.floor(Math.random() * 4);
          if (!positionCalculator(0, newdata).isSomethingThere({
            position,
            direction,
          }, size)) {
            thisship = ship({
              size,
              position,
              direction,
            });
            break;
          }
        }
        render().addShip(b, positionCalculator(0, a).allpositions(thisship.vertex, thisship.size));
        return thisship;
      });
    },
    initPlayer: () => {
      this.renderer.renderLabels();
    },
    chips: (() => {
      [2, 3, 4, 4, 2, 2, 3, 6].map((size, index) => {
        let thisship = ship(size, 0, 0);
        let i = 0;
        if (playerrender) {
          while (i < 5000) {
            i += 1;
            const position = Math.floor(Math.random() * 99);
            const direction = Math.floor(Math.random() * 4);
            if (!positionCalculator(0, data).isSomethingThere({
              position,
              direction,
            }, size))
            {
              thisship = ship({
                size,
                position,
                direction,
              });
              break;
            } 
          }
          render().addShip(index, positionCalculator(0, data)
          .allpositions(thisship.vertex, thisship.size));
        }
        else {
          thisship = ship({
            size,
            index,
            direction: 0,
          });
        }
        return thisship;
      });
    })(),
    strike: (position) => {
      if (!this.renderer) {
        this.renderer = render();
      }
      if (!this.data) {
        this.data = data;
      }
      if (!this.strikes) {
        this.strikes = strikes;
      }
      this.data[position] = true;
      this.renderer.strikePosition(this.index, position, this.data[position]);
    },
  };
}
