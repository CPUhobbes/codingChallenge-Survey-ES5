# A Survey App --- ES5 VERSION

#### Survey app that uses Bootstrap, React/React-Router, Node Express, Sequelize ORM, MySQL.  Users can only take a survey questions they have not previously answered.  This is done by keeping track of the IP Addresses.  The Admin panel allows the admin to add questions, delete questions, and view results.

## LIVE DEMO
https://frozen-meadow-21427.herokuapp.com/

## ADMIN PANEL LOG IN
* Username: admin
* Password: pass
* Admin login link in top right corner

## Instructions:
1. Clone Repository
2. Run npm install
3. Install sequelize-cli if not installed globally
4. Create database in MySQL called 'survey'
    * Change MySQL login info (and database name if needed) in the sequelize.json file
5. Migrate database by running 'sequelize db:migrate'
6. Run 'webpack -w' to transpile React code
7. Run 'node server.js' to start server
8. Open browser and go to 'localhost:3000' to view app

## App Requirements
1. Create a web app written in Node.JS using an Express based framework, SequelizeJS, and MySQL
2. Use NPM to declare all dependencies so that we can run it in a test environment.
3. The app should allow an admin to enter survey questions with multiple choice answers.
4. When a guest visits the app in a browser it should present a random survey question to the guest and allow them to answer.
5. Avoid showing a previously answered question to the same guest.
6. Record answers and display the survey results in an admin interface.
7. Secure the admin interface from guests.
8. Make sure the UI is mobile browser friendly.