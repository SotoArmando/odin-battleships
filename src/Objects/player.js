import positionCalculator  from './positionCalculator';
import render from './domrenderer';
import ship from './ship';


export default function player(
  _index,
   playerrender = true,
) {
  let renderer = render();
  let data = [...(' '.repeat(100).split('').map(() => false))];
  let strikes = [...(' '.repeat(100).split('').map(() => false))];
  const index = _index;
  const shipnames= ['Destroyer','Submarine','Battleship','Battleship','Destroyer','Destroyer','Submarine','Carrier']

  return {
    data,
    strikes,
    index,
    renderer,
    initallevents: (board) => {
      renderer.initEventListeners(board);
    },
    renderreset: () => {
      renderer.reset();
    },
    reset() {
      const newdata = [...(' '.repeat(100).split('').map(() => false))];
      data = newdata;
      strikes = newdata;
      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size,number) => {
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
          .allpositions(thisship.vertex, thisship.size),number);
        return thisship;
      });
    },
    initPlayer: () => {
      renderer.renderLabels();
    },
    chips: (() => {
      const newdata = [...(' '.repeat(100).split('').map(() => false))];
      [2, 3, 4, 4, 2, 2, 3, 6].map((size,number) => {
        let thisship = ship(size, 0, 0);
        let i = 0;
        if (playerrender) {
          while (i < 5000) {
            i += 1;
            const position = Math.floor(Math.random() * 99);
            const direction = Math.floor(Math.random() * 4);
            const calc = positionCalculator(0, newdata)
            const condition = calc
              .isSomethingThere({ position, direction }, size , newdata);
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
            .allpositions(thisship.vertex, thisship.size),number);
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
    strike: (position,arrid) => {
      
      if (!renderer) {
        renderer = render();
      }

      data[position] = true;
      renderer
        .strikePosition(index, position, shipnames[arrid], arrid);
    },
  };
}
