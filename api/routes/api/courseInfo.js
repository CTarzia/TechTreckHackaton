const express = require('express');
const router = express.Router();
const sql = require('../../db');

// Get course info
router.get('/', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT * FROM course WHERE idcourse = '${req.body.idcourse}'`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const course = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(course);
                }
            });
        }
    });
});

// Get course students
router.get('/students', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT user_id FROM users_per_course WHERE course_id ='${req.params.idcourse}'`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const students = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(students);
                }
            });
        }
    });
});

module.exports = router;

