import positionCalculator  from './positionCalculator';
import render from './domrenderer';
import ship from './ship';


export default function player(
  _index,
  _data = [...(' '.repeat(100).split('').map(() => false))], _strikes = [...(' '.repeat(100).split('').map(() => false))], playerrender = true,
) {
  const renderer = render();
  let data = [...(' '.repeat(100).split('').map(() => false))];
  let strikes = [...(' '.repeat(100).split('').map(() => false))];
  const index = _index;

  return {
    data: [...(' '.repeat(100).split('').map(() => false))],
    strikes: [...(' '.repeat(100).split('').map(() => false))],
    index,
    renderer: renderer,
    initallevents: (board) => {
      renderer.initEventListeners(board);
    },
    renderreset: () => {
      renderer.reset();
    },
    reset() {
      const newdata = [...(' '.repeat(100).split('').map(() => false))];
      data = newdata;
      this.strikes = newdata;
      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {
        let i = 0;
        let thisship = ship(size, 0, 0);
        while (i < 5000) {
          i += 1;
          const position = Math.floor(Math.random() * 99);
          const direction = Math.floor(Math.random() * 4);
          const condition = positionCalculator(0, newdata)
            .isSomethingThere({ position, direction }, size, newdata);
          if (!condition) {
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
        return thisship;
      });
    },
    initPlayer: () => {
      renderer.renderLabels();
    },
    chips: (() => {
      const newdata = [...(' '.repeat(100).split('').map(() => false))];
      [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {
        let thisship = ship(size, 0, 0);
        let i = 0;
        if (playerrender) {
          while (i < 5000) {
            i += 1;
            const position = Math.floor(Math.random() * 99);
            const direction = Math.floor(Math.random() * 4);
            const calc = positionCalculator(0, newdata)
            const condition = calc
              .isSomethingThere({ position, direction }, size ,newdata);
            if (!condition) {
              thisship = ship({
                size,
                position,
                direction,
              });
              break;
            }
          }
          debugger
          render().addShip(index, positionCalculator(0, data)
            .allpositions(thisship.vertex, thisship.size));
        }
        else
        {
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
      if (!renderer) {
        renderer = render();
      }

      data[position] = true;
      renderer
        .strikePosition(index, position, data[position]);
    },
  };
}
