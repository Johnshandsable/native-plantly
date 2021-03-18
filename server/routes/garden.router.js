const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/dropdown', rejectUnauthenticated, (req, res) => {
  // console.log(req.user.id);
  const sqlQuery = `SELECT * FROM "garden_sections" WHERE "user_id" = $1`;

  pool
    .query(sqlQuery, [req.user.id])
    .then((dbRes) => {
      console.log('GET - dropdown res', dbRes);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('GET - dropdown error', err);
      res.sendStatus(500);
    });
});

router.post('/dropdown', (req, res) => {
  // console.log(req.user.id);
  const sqlQuery = `INSERT INTO "garden_sections" ("name", "user_id") VALUES ($1, $2);`;
});

module.exports = router;
