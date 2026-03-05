# Mars Rover Navigation API 

A modular **Node.js + Express backend API** that simulates the navigation of robotic rovers exploring a rectangular plateau on Mars (or the Moon).  
The API receives rover positions and navigation commands, processes them sequentially, and returns their final coordinates and orientation.

---

# Problem

A squad of robotic rovers is deployed on a rectangular plateau. Each rover can move across the grid using navigation commands sent from mission control.

The plateau is divided into a grid where:

- The **bottom-left coordinate is (0,0)**
- The **top-right coordinate defines the plateau boundary**

Each rover has:

- an **x coordinate**
- a **y coordinate**
- a **direction** (N, E, S, W)

Example position:

```
1 2 N
```

Meaning:

- x = 1  
- y = 2  
- facing **North**

---

## Rover Commands

The rover receives a string of instructions:

| Command | Meaning |
|-------|--------|
| L | Rotate 90° Left |
| R | Rotate 90° Right |
| M | Move forward one grid point |

Example:

```
LMLMLMLMM
```

---

## Important Rules

- Rovers move **one at a time**
- The **next rover starts only after the previous rover finishes**
- Rovers **cannot move outside the plateau**
- Invalid commands or out-of-bound movements return errors

---

# Approach

The solution follows a **layered backend architecture** to keep responsibilities separated and code maintainable.

The navigation process works as follows:

1. The client sends a request with plateau dimensions and rover data.
2. The API validates the request.
3. Each rover is instantiated as a **Rover model object**.
4. Commands are processed sequentially.
5. Movement and rotation logic update the rover state.
6. Boundary checks ensure the rover stays within the plateau.
7. The final positions are returned as the API response.

### Core Logic

Rotation is handled using a directional array:

```
[N, E, S, W]
```

Movement rules:

| Direction | Movement |
|----------|---------|
| N | y + 1 |
| E | x + 1 |
| S | y - 1 |
| W | x - 1 |

---

# Architecture

The project is organized into modular backend layers:

```
mars-rover-navigation
│
├── server.js
├── routes
│     roverRoutes.js
│
├── controllers
│     roverController.js
│
├── services
│     roverService.js
│
├── models
│     Rover.js
│
└── utils
      directionUtils.js
```

### server.js
Application entry point that starts the Express server and registers routes.

### routes
Defines API endpoints and maps them to controllers.

### controllers
Handles HTTP requests and responses. Validates input and forwards processing to the service layer.

### services
Contains the **core business logic** for navigating multiple rovers.

### models
Defines the **Rover class**, which manages rover state and movement.

### utils
Provides helper utilities such as **direction rotation logic**.

---

## System Flow

```
Client Request
      ↓
Express Server
      ↓
Route
      ↓
Controller
      ↓
Service
      ↓
Rover Model
      ↓
Direction Utils
      ↓
Response
```

---

# How to Run

### 1. Clone the repository

```
git clone https://github.com/Hariksh/Rover_Problem.git
cd Rover_Problem
```

### 2. Install dependencies

```
npm install
```

### 3. Start the server

```
node server.js
```

Server will start on:

```
http://localhost:5001
```

---

# API Endpoint

### POST /api/navigate-rovers

Processes rover navigation commands and returns their final positions.

---

# Example Input

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

---

# Example Output

```json
{
  "finalPositions": [
    "1 3 N",
    "5 1 E"
  ]
}
```

---

# Error Handling

The API validates inputs and handles common errors.

| Status Code | Description |
|-------------|-------------|
| 400 | Missing or invalid input data |
| 422 | Invalid command or rover moves outside plateau |
| 500 | Unexpected server error |

---

# Tech Stack

- Node.js
- Express.js
- JavaScript (ES6)
- Modular backend architecture

---

# Author

**Hariksh Suryawanshi**  
Backend Developer Internship Assignment
