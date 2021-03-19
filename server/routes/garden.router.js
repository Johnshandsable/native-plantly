const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/dropdown', rejectUnauthenticated, (req, res) => {
  // console.log(req.user.id);
  const sqlQuery = `SELECT "id", "name" FROM "garden_sections" WHERE "user_id" = $1`;
  const userId = req.user.id;

  pool
    .query(sqlQuery, [userId])
    .then((dbRes) => {
      // console.log('GET - dropdown res', dbRes);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('GET - dropdown error', err);
      res.sendStatus(500);
    });
});

router.post('/dropdown', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `INSERT INTO "garden_sections" ("name", "user_id") VALUES ($1, $2);`;
  const sectionName = req.body.name;
  const userId = req.user.id;
  // console.log(sectionName);

  pool
    .query(sqlQuery, [sectionName, userId])
    .then((dbRes) => {
      console.log('POST - dropdown', dbRes);
      res.sendStatus(201); // CREATED
    })
    .catch((err) => {
      console.error('POST - dropdown an error occurred', err);
      res.sendStatus(500);
    });
});

router.delete('/dropdown/:id', rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const sectionId = req.params.id;
  const sqlQuery = `DELETE FROM "garden_sections" WHERE "id" = $1 AND "user_id" = $2;`;

  pool
    .query(sqlQuery, [sectionId, userId])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('DELETE - dropdown an error occurred', err);
    });
});

module.exports = router;
