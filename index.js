const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000; // You can choose any available port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Define the routeInfo data
const routeInfo = {
  routeInfo: [
    {
      "id": "r002",
      "name": "k-12",
      "source": "Yashwantpur",
      "tripDuration": "2hrs",
      "destination": "Marathahalli",
      "icon": "http://"
    },
    {
      "id": "r003",
      "name": "k-11",
      "tripDuration": "45 min",
      "source": "Koramangala",
      "destination": "Bomanhalli",
      "icon": "http://"
    },
    {
      "id": "r004",
      "name": "k-14",
      "source": "E City",
      "tripDuration": "1hrs",
      "destination": "Silk Board",
      "icon": "http://"
    },
    {
      "id": "r001",
      "name": "R-1",
      "source": "Marathahalli",
      "tripDuration": "2hrs",
      "destination": "E City",
      "icon": "http://"
    },
    {
      "id": "r005",
      "name": "G-12",
      "tripDuration": "2hrs",
      "source": "Koramangala",
      "destination": "E City",
      "icon": "http://"
    }
  ],
  routeTimings: {
    "r002": [
      {
        "totalSeats": 13,
        "avaiable": 5,
        "tripStartTime": "18:40"
      },
      {
        "totalSeats": 13,
        "avaiable": 0,
        "tripStartTime": "18:48"
      },
      {
        "totalSeats": 13,
        "avaiable": 1,
        "tripStartTime": "19:05"
      }
    ],
    "r005": [
      {
        "totalSeats": 13,
        "avaiable": 5,
        "tripStartTime": "19:10"
      },
      {
        "totalSeats": 13,
        "avaiable": 0,
        "tripStartTime": "19:00"
      },
      {
        "totalSeats": 13,
        "avaiable": 1,
        "tripStartTime": "19:05"
      }
    ],
    "r001": [],
    "r004": [
      {
        "totalSeats": 13,
        "avaiable": 5,
        "tripStartTime": "14:55"
      },
      {
        "totalSeats": 13,
        "avaiable": 0,
        "tripStartTime": "15:00"
      },
      {
        "totalSeats": 13,
        "avaiable": 1,
        "tripStartTime": "15:05"
      }
    ],
    "r003": [
      {
        "totalSeats": 12,
        "avaiable": 10,
        "tripStartTime": "15:55"
      },
      {
        "totalSeats": 12,
        "avaiable": 9,
        "tripStartTime": "20:00"
      },
      {
        "totalSeats": 12,
        "avaiable": 1,
        "tripStartTime": "19:05"
      }
    ]
  }
};

// Create an API endpoint to retrieve the routeInfo data
app.get('/api/routeInfo', (req, res) => {
  res.json(routeInfo);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
