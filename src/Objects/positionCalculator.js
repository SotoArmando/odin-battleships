
function positionIn(x) {
  const rows = 10;
  const columns = 10;
  const xismorethanonerow = (x > columns);
  if (xismorethanonerow) {
    return {
      x: x % columns,
      y: Math.floor(x / rows),
    };
  }
  return {
    x,
    y: 0,
  };
}

function positionCalculator(position = 0, data) {
  return {
    position,
    goLeft: (number) => {
      let error;
      if (number > 98 || number < 2) {
        error = 'There is no more board to do that';
      } else {
        error = 'none';
      }
      if (error !== 'none') {
        return error;
      }
      this.position -= 1;
      return (this.position);
    },
    goRight: (number) => {
      let error;
      if (number > 98 || number < 2) {
        error = 'There is no more board to do that';
      } else {
        error = 'none';
      }
      if (error !== 'none') {
        return error;
      }
      this.position += 1;
      return (this.position);
    },
    goUp: (number) => {
      let error;
      if (number > 89) {
        error = 'There is no more board to do that';
      } else {
        error = 'none';
      }
      if (error !== 'none') {
        return error;
      }
      this.position += 10;
      return (this.position);
    },
    goDown: (number) => {
      let error;
      if (number < 10) {
        error = 'There is no more board to do that';
      } else {
        error = 'none';
      }
      if (error !== 'none') {
        return error;
      }
      this.position -= 10;
      return (this.position);
    },
    isSomethingThere: (vertex, size) => {
      let yes = false;
      this.position = vertex.position;
      const positions = [];
      const positionbi = positionIn(vertex.position);

      switch (vertex.direction) {
        default:
          return false;
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

      for (let i = 0; i < size; i += 1) {
        positions.push(this.position);

        switch (vertex.direction) {
          default:
            return false;
          case 0:
            yes = (data[this.position]) ? true : yes;
            this.goUp();
            break;
          case 1:
            yes = (data[this.position]) ? true : yes;
            this.goRight();
            break;
          case 2:
            yes = (data[this.position]) ? true : yes;
            this.goDown();
            break;
          case 3:
            yes = (data[this.position]) ? true : yes;
            this.goLeft();
            break;
        }
      }

      if (!yes) {
        positions.forEach((position) => {
          data[position] = true;
        });
      }

      return yes;
    },

    allpositions: (vertex, size) => {
      this.position = vertex.position;
      const positions = [];

      for (let i = 0; i < size; i += 1) {
        positions.push(this.position);
        switch (vertex.direction) {
          default:
            return false;
          case 0:
            this.goUp();
            break;
          case 1:
            this.goRight();
            break;
          case 2:
            this.goDown();
            break;
          case 3:
            this.goLeft();
            break;
        }
      }
      return positions;
    },
  };
}

export default positionCalculator;
