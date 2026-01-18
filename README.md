Voting Application

This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.

Features

User sign-up and login with Aadhar Card Number and password

Users can view the list of candidates

Users can vote for a candidate (only once)

Admin can manage candidates (add, update, delete)

Admin cannot vote

Technologies Used

Node.js

Express.js

MongoDB

JSON Web Tokens (JWT) for authentication

Installation

Clone the repository:

git clone https://github.com/Ramprabhav/voting_app.git


Navigate to the project folder:

cd voting_app


Install dependencies:

npm install


Create a .env file and add your environment variables (MongoDB URI, JWT secret, etc.)

Start the server:

npm start
