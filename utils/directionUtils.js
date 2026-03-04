const DIRECTIONS = ['N', 'E', 'S', 'W'];

const rotate = (currentDirection, command) => {
    let index = DIRECTIONS.indexOf(currentDirection);
    
    if (command === 'L') {
        index = (index + 3) % 4; 
    } else if (command === 'R') {
        index = (index + 1) % 4;
    } 
    return DIRECTIONS[index];
};

module.exports = {
    DIRECTIONS,
    rotate
};
