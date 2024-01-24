const express = require('express');
const router = express.Router();
const sql = require('../../db');

// Get login (user data)
router.post('/', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            connection.query(`SELECT * FROM user WHERE username = '${req.body.username}'`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    const user = Object.values(JSON.parse(JSON.stringify(results)));
                    res.json(user);
                }
            });
        }
    });
});

module.exports = router;

