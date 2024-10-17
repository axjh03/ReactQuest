
# React Quiz App

This is a **React** application built using **React.js** and **TypeScript**. The app allows users to take quizzes with multiple-choice questions. It fetches quiz data from an external API and evaluates user responses.

## Features

- **React.js** and **TypeScript**: Provides type-safe, scalable code.
- **Styled Components**: For dynamic and reusable styling.
- **API Integration**: Fetches quiz questions from an external API.
- **Interactive Quiz**: Users can answer multiple-choice questions and see their score at the end.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## API

This app uses the following API to fetch quiz questions:

[Open Trivia Database API](https://opentdb.com/)  
API endpoint example: `https://opentdb.com/api.php?amount=10&type=multiple`

## Installation and Setup

To run the app on your local machine, follow the steps below:

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Navigate to the Project Directory

After cloning the repository, navigate to the project folder:

```bash
cd your-repo-name
```

### 3. Install Dependencies

Install the required npm dependencies:

```bash
npm install
```

### 4. Run the Development Server

Start the app in development mode by running the following command:

```bash
npm run dev
```

The app will be running locally on `http://localhost:3000`.

## Usage

Once the app is up and running, it will load a series of quiz questions fetched from the Open Trivia Database API. Users can select their answers, and after completing the quiz, the app will display the score and correct answers.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Runs the app in development mode. Open `http://localhost:3000` to view it in your browser. The page will reload automatically as you make edits.

- `npm run build`: Builds the app for production. The build output will be placed in the `build` folder. This creates an optimized production version of your app, ready for deployment.

## Built With

- **React.js**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language built on JavaScript.
- **Styled Components**: For styling React components using tagged template literals.
- **Open Trivia Database API**: External API used for fetching quiz questions.
