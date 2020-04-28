const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(req.user);
    let sqlText = `SELECT * FROM "project" JOIN "project_details" ON "project_details"."id" = "project"."id" WHERE "user_id" = $1;`;
    pool.query(sqlText, [req.user.id]).then( response => {
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