const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET the threads that a specific project will need
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log("in strings router get", req.query.project_id, req.user.id);
    let sqlText = `SELECT "thread_needed"."id", 
    "thread_needed"."project_id", "thread_needed"."color_id", 
    "amount_needed", "color_completed", "being_created", "number", 
    "color_name", "color_value", "thread_available"."id" AS "amount_available_id", 
    "amount_available"  
    FROM "thread_needed" 
    LEFT JOIN "thread_available" ON "thread_needed"."color_id" = "thread_available"."color_id" 
    JOIN "project" 
    ON "project"."id" = "thread_needed"."project_id"
    JOIN "possible_thread" ON "possible_thread"."id" = "thread_needed"."color_id"   
    WHERE "thread_needed"."project_id" = $1 AND "user_id" = $2 ORDER BY "thread_needed"."id";`;
    pool.query(sqlText, [ req.query.project_id, req.user.id]).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting threads needed for this project', error);
        res.sendStatus(500);
    });
});

//GET a list of all the possible threads from the database with their colors and names and numbers
router.get('/possible', rejectUnauthenticated, (req, res) => {
    let sqlText = `SELECT * FROM "possible_thread";`;
    pool.query(sqlText).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting projects', error);
        res.sendStatus(500);
    });
});

router.get('/color/:id', rejectUnauthenticated, (req, res) => {
    let sqlText= `SELECT "thread_available"."id" AS "thread_available_id",
     "project_id", "color_id", "amount_available", "project_name", 
     "possible_thread"."number" AS "color_number", "color_name", "color_value" 
     FROM "thread_available"
    JOIN "project_details" ON "thread_available"."project_id" = "project_details"."id"
    JOIN "possible_thread" ON "thread_available"."color_id" = "possible_thread"."id"
    WHERE "color_id" = $1;`;
    pool.query(sqlText, [req.params.id]).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting this color', error);
    })
})

 



//POST a new thread needed to the database, with the info about the project that needs it,
// the color that is needed and the amount needed. The user is irrelevant since the project_id
//is already guaranteed to be associated with the correct user.
router.post('/needed', rejectUnauthenticated, (req, res) => {
    console.log(req.body.data);
    console.log("in needed strings router post");
    let sqlText = `INSERT INTO "thread_needed" ( "project_id", "color_id", "amount_needed", "color_completed") VALUES 
    ( $1, $2, $3, FALSE) RETURNING project_id;`;
    pool.query(sqlText, [req.body.data.project_id, req.body.data.color_id, req.body.data.amount]).then( response => {
        res.send([response.rows[0].project_id]);
    }).catch( error => {
        console.log('error in adding a needed string', error);
        res.sendStatus(500);
    });
});

//DELETE a thread needed based on the id of the line item that the user decided to delete.
//It returns the project_id because to re render the list of strings on the page, the next step
//in the saga will need to know which project it's supposed to be getting the strings for
router.delete('/needed/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id);
    console.log("in needed strings router post");
    let sqlText = `DELETE FROM "thread_needed" WHERE "id" = $1 RETURNING "project_id";`;
    pool.query(sqlText, [req.params.id]).then( response => {
        res.send([response.rows[0].project_id]);
    }).catch( error => {
        console.log('error in deleting a needed string', error);
        res.sendStatus(500);
    });
});

module.exports = router;