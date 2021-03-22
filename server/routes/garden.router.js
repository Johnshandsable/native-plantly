const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/dropdown', rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const sqlQuery = `SELECT "id", "name" FROM "garden_sections" WHERE "user_id" = $1`;

  console.log('SERVER - GET - getting dropdown by user id');

  pool
    .query(sqlQuery, [userId])
    .then((dbRes) => {
      console.log('SERVER - GET - getting dropdown by user id success!');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('GET - dropdown error', err);
      res.sendStatus(500);
    });
});

router.post('/dropdown', rejectUnauthenticated, (req, res) => {
  const sectionName = req.body.name;
  const userId = req.user.id;
  const sqlQuery = `INSERT INTO "garden_sections" ("name", "user_id") VALUES ($1, $2);`;

  console.log('SERVER - POST - adding new dropdown');

  pool
    .query(sqlQuery, [sectionName, userId])
    .then((dbRes) => {
      console.log('SERVER - POST - adding dropdown success!');
      res.sendStatus(201); // CREATED
    })
    .catch((err) => {
      console.error('POST - dropdown an error occurred', err);
      res.sendStatus(500);
    });
});

router.put('/dropdown', rejectUnauthenticated, (req, res) => {
  /*
    Updates the garden section name by looking at id and passing in new name
  */
  const userId = req.user.id;
  const sectionId = req.body.id;
  const sectionName = req.body.name;
  const sqlQuery = `UPDATE "garden_sections" SET "name" = $1
  WHERE "user_id" = $2 AND "id" = $3;`;

  console.log('SERVER - PUT - updating garden_section by name');

  pool
    .query(sqlQuery, [sectionName, userId, sectionId])
    .then((dbRes) => {
      console.log('SERVER - PUT - updating garden_section name success!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(
        'SERVER - PUT - an error occurred updating a dropdown',
        err
      );
    });
});

router.delete('/dropdown/:id', rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const sectionId = req.params.id;
  const sqlQuery = `DELETE FROM "garden_sections" WHERE "id" = $1 AND "user_id" = $2;`;

  console.log('SERVER - DELETE - dropdown by id');

  pool
    .query(sqlQuery, [sectionId, userId])
    .then((dbRes) => {
      console.log('SERVER - DELETE - dropdown deleted success!');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('SERVER - DELETE - dropdown an error occurred', err);
    });
});

module.exports = router;
