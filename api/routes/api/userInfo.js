const express = require('express');
const router = express.Router();
const sql = require('../../db');

// Get points
router.get('/points', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT points FROM user WHERE iduser = '${req.body.iduser}'`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const points = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(points);
                }
            });
        }
    });
});

// Get points
router.get('/courses', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT course_id FROM users_per_course WHERE user_id = ${req.params.iduser}`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const courses = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(courses);
                }
            });
        }
    });
});

// Get username
router.get('/username', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT username FROM user WHERE iduser = '${req.body.iduser}'`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const username = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(username);
                }
            });
        }
    });
});

module.exports = router;

