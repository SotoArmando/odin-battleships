export default function ship({
  size,
  position,
  direction,
}) {
  return {
    lives: {
      size,
      hit: [],
    },
    size,
    vertex: {
      position,
      direction,
    },
    isInit: false,

    hit: () => {
      this.lives.size -= 1;
    },
    isSunk: () => this.lives.size === 0,
  };
}
