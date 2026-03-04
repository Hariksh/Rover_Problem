const Rover = require('../models/Rover');

const processNavigation = (data) => {
    const { plateau, rovers } = data;

    if (!plateau || !rovers || !Array.isArray(rovers)) {
        throw new Error('Invalid input format: plateau and rovers array are required');
    }

    const { width, height } = plateau;
    const finalPositions = [];

    for (const roverData of rovers) {
        const { x, y, direction, commands } = roverData;
        const rover = new Rover(x, y, direction, { width, height });
        rover.processCommands(commands);
        finalPositions.push(rover.getPosition());
    }
    return finalPositions;
};

module.exports = {
    processNavigation
};
