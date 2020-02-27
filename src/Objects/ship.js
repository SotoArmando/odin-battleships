export default function ship({
    size,
    position,
    direction
}) 
{
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

        hit: function () {
            this.lives.size -= 1;
        },
        isSunk: function () {
            return this.lives.size === 0;
        }
    }
}
