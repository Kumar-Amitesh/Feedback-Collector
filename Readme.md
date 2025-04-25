# Feedback Collector Application

A full-stack web application to collect feedback from users and display it in an admin view. Built with React for the frontend and Express.js with MongoDB for the backend. The application includes mobile responsiveness, a dark/light theme toggle, and various UI enhancements like smooth transitions and form validation.

## Features

- **Submit Feedback**: Users can submit their name, email, and feedback message.
- **Admin View**: Admin can view all collected feedback in a styled list with timestamps.
- **Dark/Light Mode**: Toggle between dark and light themes.
- **Responsive Design**: Fully mobile-responsive, optimized for all screen sizes.
- **Form Validation**: Validation for name, email, and message fields with user-friendly error messages.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client to interact with the backend API.
- **Framer Motion**: For animations and smooth transitions.
- **React Router**: For handling routing in the application.

### Backend
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database to store feedback entries.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: A package for enabling Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.

## Project Structure

```
/feedback-collector-app
├── /client
│   ├── /src
|   |   |- /components
|   |   |   | - Feedback.jsx
|   |   |   | - Form.jsx
|   |   |   | - Header.jsx
|   |   |   | - Layout.jsx
|   |   |- App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── /server
│   ├── /models
│   │   └── Feedback.js
│   ├── .env
│   ├── server.js
│   ├── package.json
└── README.md
```

### Frontend (`/client`)

- **App.jsx**: The main React component containing the form and feedback display.
- **index.css**: Tailwind CSS configurations and custom styles.
- **vite.config.js**: Configuration file for Vite (development bundler).

### Backend (`/server`)

- **server.js**: The Express server that handles API routes.
- **models/Feedback.js**: Mongoose model for feedback entries.
- **routes/feedbackRoutes.js**: Defines the routes for submitting and retrieving feedback.
- **.env**: Stores sensitive environment variables (e.g., MongoDB URI).

## Installation

### Frontend

1. Navigate to the frontend directory and install dependencies:
   ```bash
   cd client
   npm install
   ```

### Backend

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

2. In `server/.env`, add your MongoDB connection string:
   ```env
   MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Deployment

### Frontend

1. Push the frontend code to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/), sign in, and create a new site from Git.
3. Connect your GitHub repository and deploy.

### Backend

1. Push the backend code to a GitHub repository.
2. Deploy the backend to a platform like [Render](https://render.com/) or [Heroku](https://www.heroku.com/).
3. Set the environment variables (`MONGODB_URI`) in your chosen platform.

### Final Setup

- Ensure both frontend and backend are live and connected. Update the `REACT_APP_BACKEND_URL` in the frontend `.env` file to point to the deployed backend.

## Running Locally

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser to view the application.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios, Framer Motion, React Router.
- **Backend**: Express, MongoDB, Mongoose, CORS, dotenv.

## Live Demo
- **You can try the application live here**: [Netlify](https://680bcb94c40a5c7cff44d551--sharefeedback.netlify.app/)

## Author

- **Amitesh Kumar** - [GitHub](https://github.com/Kumar-Amitesh)
```
