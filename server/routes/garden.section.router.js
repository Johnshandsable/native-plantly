const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET plants by garden section id
router.get('/:id', async (req, res) => {
  const selectionId = req.params.id;
  const userId = req.user.id;
  console.log('USER ID', userId);
  console.log('SELECTION', selectionId);
  const sqlQuery = `
  SELECT "trefle_slug" 
  FROM "garden_sections" 
  JOIN "plants" ON "plants".section_id = "garden_sections".id
  WHERE "garden_sections".user_id = $1 AND "garden_sections".id = $2`;

  pool
    .query(sqlQuery, [userId, selectionId])
    .then((dbRes) => {
      const arrayOfPlants = [];
      for (const item of dbRes.rows) {
        if (item.trefle_slug) {
          const data = axios.get(
            `http://trefle.io/api/v1/plants/${item.trefle_slug}`,
            {
              params: {
                token: process.env.TREFLE_API_KEY,
              },
            }
          );
          console.log('data', data);
        }
      }

      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('GET - plants by section an error occurred', err);
      res.sendStatus(500);
    });
});

module.exports = router;
