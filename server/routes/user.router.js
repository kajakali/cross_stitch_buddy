const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  let user_id = '';
  let project_id = '';
  const queryText = 'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id';
  pool.query(queryText, [username, password])
    .then((response) => {
      //TODO another SQL query to make the general storage project...
      const sqlText = `INSERT INTO "project" ("user_id", "being_created") VALUES ($1, FALSE) RETURNING "user_id", "id";`;
      pool.query(sqlText, [response.rows[0].id]).then((newResponse) => {
        user_id = newResponse.rows[0].user_id;
        project_id = newResponse.rows[0].id;
        console.log('user id', user_id, 'project_id', project_id);
        let sqlText3 = `INSERT INTO "project_details" 
        ("id", "project_name", "start_date") 
        VALUES ( $1, 'General Storage', NOW()) RETURNING "id";`;
        pool.query(sqlText3, [project_id])
        .then((response) => {
          console.log(response.rows[0].id); //this is still the project id so we don't really need it.
          // this is where I'd have to do one more super huge tricky sql query to insert a bunch of rows into the 
          // needed strings table. but i don't know how to do it TODO. If I ever figure it out...
        });
      });
      res.send({id: user_id});})
    .catch(() => res.sendStatus(500));
});


 //isnt' currently used. Should create a new project when a user is created
 router.post('/', rejectUnauthenticated, (req, res) => {
  let sqlText = `
  INSERT INTO "project" ("user_id", "being_created") VALUES ($1, FALSE) RETURNING "id";`;
  pool.query(sqlText, [req.body.data.id]).then( response => {
      let newSqlText = `INSERT INTO "project_details" 
      ("id", "project_name", "start_date") 
      VALUES ( $1, 'General Storage', NOW());`;
      pool.query(newSqlText, [response.rows[0].id]).then( response => {
          res.sendStatus(200);
      }).catch( error => {
          console.log('error in making a new project', error); 
          res.sendStatus(500);
      });
  }).catch( error => {
      console.log('error in making general storage project', error); 
      res.sendStatus(500);
  });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
