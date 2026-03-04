const { rotate } = require('../utils/directionUtils');

class Rover {
    constructor(x, y, direction, plateau) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;
    }

    processCommands(commands) {
        for (const char of commands) {
            if (char === 'M') {
                this.move();
            } else if (char === 'L' || char === 'R') {
                this.direction = rotate(this.direction, char);
            } else {
                throw new Error(`Invalid command: ${char}`);
            }
        }
    }

    move() {
        let newX = this.x;
        let newY = this.y;

        switch (this.direction) {
            case 'N': newY++; break;
            case 'E': newX++; break;
            case 'S': newY--; break;
            case 'W': newX--; break;
        }
        if (newX < 0 || newX > this.plateau.width || newY < 0 || newY > this.plateau.height) {
            throw new Error(`Move out of bounds: (${newX}, ${newY})`);
        }
        this.x = newX;
        this.y = newY;
    }
    getPosition() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

module.exports = Rover;
