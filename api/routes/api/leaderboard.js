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
            connection.query('SELECT * FROM user WHERE is_teacher = 0 ORDER BY points DESC', function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const leaderboard = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(leaderboard);
                }
            });
        }
    });
});

module.exports = router;

