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

export { positionCalculator, positionIn, positionOut }
