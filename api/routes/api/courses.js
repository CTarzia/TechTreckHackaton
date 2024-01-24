const express = require('express');
const router = express.Router();
const sql = require('../../db');

// Gets leaderboard
router.get('/', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query('SELECT * FROM course', function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send(error);
                } else {
                    const courses = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(courses);
                }
            });
        }
    });
});

module.exports = router;

