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
