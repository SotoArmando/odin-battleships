export default function ship({
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
      position: position,
      direction: direction
    },
    isInit: false,

    hit:  () => {
      this.lives.size -= 1;
    },
    isSunk:  () => {
      return this.lives.size === 0;
    }
  }
}
