const roverService = require('../services/roverService');

const navigateRovers = (req, res) => {
    try {
        const { plateau, rovers } = req.body;
        if (!plateau || !rovers) {
            return res.status(400).json({ error: 'Missing plateau or rovers data' });
        }
        const result = roverService.processNavigation({ plateau, rovers });

        return res.status(200).json({
            finalPositions: result
        });

    } catch (error) {
        console.error('Error during rover navigation:', error.message);
        return res.status(422).json({ error: error.message });
    }
};

module.exports = {
    navigateRovers
};
