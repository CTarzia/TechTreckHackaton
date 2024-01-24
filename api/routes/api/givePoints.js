const express = require('express');
const router = express.Router();
const sql = require('../../db');

// give points to one
router.put('/', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
        } else {
            connection.query(`UPDATE user SET points = points + ${req.body.points} WHERE iduser = ${req.body.iduser}`, function (error, results) {
                connection.release();
                if (error) {
                    res.status(400).send('Error in database operation');
                } else {
                    res.status(200).json({msg: 'Success'});
                }
            });
        }
    });
});

// give points to group
router.put('/list', (req, res) => {
    sql.getConnection(function(err, connection) {
        if ( err ){
            res.status(400).send('Error in database connection');
            connection.release();
        } else {
            var hadErrors;
            req.body.idusers.forEach(iduser => {
                connection.query(`UPDATE user SET points = points + ${req.body.points} WHERE iduser = ${iduser}`, function (error, results) {
                    if (error) {
                        hadErrors = true;
                    }
                });
            });
            connection.release();
            if (hadErrors) {
                res.status(400).send('Error in database operation');
            } else {
                res.status(200).json({msg: 'Success'});
            }
        }
    });
});

module.exports = router;

