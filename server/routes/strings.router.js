const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log("in strings router get", req.query.project_id, req.user.id);
    let sqlText = `SELECT "thread_needed"."id", "project_id", "color_id", "amount_needed", "color_completed", "being_created", "number", "color_name", "color_value"  FROM "thread_needed" JOIN "project" ON "project"."id" = "thread_needed"."project_id"
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
router.post('/needed', (req, res) => {
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

module.exports = router;