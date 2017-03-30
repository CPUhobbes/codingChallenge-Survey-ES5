# A Survey App --- ES5 VERSION, NODE 0.10.46

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
3. Change MySQL login info in the sequelize.json file ('/config/sequelize.json)
4. Add Schema to database using 'db.sql' file
    * Ex. mysql -u root -p < /PATH/TO/DB/FILE.sql
    * If there is an issue, create a database called "survey" in MySQL
5. Run 'node server.js' to start server
6. Open browser and go to 'localhost:3000' to view app

## App Requirements
1. Use ES5 and Node 0.10.46
2. Create a web app written in Node.JS using an Express based framework, SequelizeJS, and MySQL
3. Use NPM to declare all dependencies so that we can run it in a test environment.
4. The app should allow an admin to enter survey questions with multiple choice answers.
5. When a guest visits the app in a browser it should present a random survey question to the guest and allow them to answer.
6. Avoid showing a previously answered question to the same guest.
7. Record answers and display the survey results in an admin interface.
8. Secure the admin interface from guests.
9. Make sure the UI is mobile browser friendly.