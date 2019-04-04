# Docker Setup react-express-mysql
This project consists of 3 running docker containers.  
A React frontend running on a node container.  
An Express backend also running on a node container.  
And a Database runnong on a mysql container.

### Setup

**IMPORTANT:**
First change `sikkerforskning.dk` in `api/routes/test.js` and `client/src/App.js` to `localhost`.  

Requirements:
- Docker & docker-compose

Make sure you are running these commands from the project root.

- Create the neccessary docker images

run `docker build -t react-fe:latest client/.`

run `docker build -t node-be:latest api/.`

- Run the whole setup

run `docker-compose up`

#### Access-points

You should now be able to access the frontend at http://localhost:3000  
