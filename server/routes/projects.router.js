const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all the projects and their details for the logged in user
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
//GET any project that hasn't been finished being created
router.get('/add', (req, res) => {
    console.log(req.user);
    let sqlText = `SELECT * FROM "project" 
    JOIN "project_details" ON "project_details"."id" = "project"."id"
    WHERE "user_id" = $1 AND "being_created" = TRUE;`;
    pool.query(sqlText, [req.user.id]).then( response => {
        res.send(response.rows);
    }).catch( error => {
        console.log('error in getting projects', error);
        res.sendStatus(500);
    });    
});

//GET the information about the project with a specific id. The user_id is redundant but a safety measure
//to prevent users from getting other people's projects
router.get('/:id', (req, res) => {
    console.log(req.params.id, req.user.id);
     let sqlText = `SELECT * FROM "project" 
    JOIN "project_details" ON "project_details"."id" = "project"."id"
    WHERE "user_id" = $1 AND "project"."id" = $2;`;
    pool.query(sqlText, [req.user.id, req.params.id]).then( response => {
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
    let sqlText = `
    INSERT INTO "project" ("user_id", "being_created") VALUES ($1, FALSE) RETURNING "id";`;
    pool.query(sqlText, [req.body.data.id]).then( response => {
        let newSqlText = `INSERT INTO "project_details" 
        ("id", "project_name", "start_date") 
        VALUES ( $1, 'General Storage', '2008-01-12');`;
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

//PUT to mark a project that was being created as a normal project that is no longer going to show up
//when the user goes to the add project page
router.put('/', (req, res) => {
    console.log(req.body.data, req.user);
    let sqlText = `UPDATE "project"
    SET "being_created" = FALSE
    WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(sqlText, [req.body.data.project_id, req.user.id]).then( response => {
        res.sendStatus(200);
    }).catch( error => {
        console.log('error in updating project', error);
        res.sendStatus(500);
    });
})

module.exports = router;