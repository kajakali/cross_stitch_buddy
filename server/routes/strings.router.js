const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log("in strings router get", req.query.project_id, req.user.id);
    let sqlText = `SELECT * FROM "thread_needed" JOIN "project" ON "project"."id" = "thread_needed"."project_id"
    JOIN "project_details" ON "project_details"."id" = "project"."id"
    JOIN "possible_thread" ON "possible_thread"."id" = "thread_needed"."color_id" 
    WHERE "project_id" = $1 AND "user_id" = $2
    ;`;
    pool.query(sqlText, [ req.query.project_id, req.user.id]).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting projects', error);
        res.sendStatus(500);
    });
 
});
router.get('/possible', (req, res) => {
    console.log("in possible strings router get");
    let sqlText = `SELECT * FROM "possible_thread";`;
    pool.query(sqlText).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting projects', error);
        res.sendStatus(500);
    });
 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;