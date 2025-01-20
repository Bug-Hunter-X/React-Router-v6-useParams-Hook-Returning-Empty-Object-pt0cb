# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6. The `useParams` hook returns an empty object when used outside of a route component, causing unexpected behavior and empty renders.

## Problem
The provided `bug.js` file showcases the problem where `useParams` is used in a component that is not directly nested within a route.  This leads to `params` being empty, and the component unable to render correctly.

## Solution
The `bugSolution.js` file shows the corrected implementation. The solution involves refactoring the component structure to ensure that the component using `useParams` is placed inside a route that defines the path parameters.

## Setup
1. Clone the repository.
2. Navigate to the project directory: `cd react-router-v6-useparams-issue`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`

This will run the application. You can observe the different outcomes in each file to understand the issue and the solution.