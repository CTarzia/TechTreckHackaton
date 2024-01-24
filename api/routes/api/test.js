const express = require('express');
const router = express.Router();
const sql = require('../../db');

// Gets leaderboard
router.get('/', (req, res) => {
    sql.getConnection(function(err, connection) {
        res.send({ "status" : err});
    });
});

module.exports = router;

