# Mars Rover Navigation API

This is a modular Node.js/Express backend that handles Mars Rover navigation on a rectangular plateau.

## Project Structure

- `server.js`: Application entry point.
- `routes/roverRoutes.js`: Defines API endpoints.
- `controllers/roverController.js`: Manages request/response logic.
- `services/roverService.js`: Contains business logic for processing multiple rovers.
- `models/Rover.js`: Core model for Rover state and movement logic.
- `utils/directionUtils.js`: Helpers for direction mapping and rotation.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

## API Documentation

### POST /api/navigate-rovers

Navigates one or more rovers based on provided commands.

**Request Body Example:**

```json
{
  "plateau": {
    "width": 5,
    "height": 5
  },
  "rovers": [
    {
      "x": 1,
      "y": 2,
      "direction": "N",
      "commands": "LMLMLMLMM"
    },
    {
      "x": 3,
      "y": 3,
      "direction": "E",
      "commands": "MMRMMRMRRM"
    }
  ]
}
```

**Response Example:**

```json
{
  "finalPositions": [
    "1 3 N",
    "5 1 E"
  ]
}
```

## Error Handling

- Returns `400` if required data is missing.
- Returns `422` if a rover tries to move outside the plateau or receives an invalid command.
