const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', async (req, res) => {
  try {
    const selectionId = req.params.id;
    const userId = req.user.id;

    console.log('user', userId);
    console.log('selection', selectionId);

    const sqlQuery = `
        SELECT "trefle_slug" 
        FROM "garden_sections" 
        JOIN "plants" ON "plants".section_id = "garden_sections".id
        WHERE "garden_sections".user_id = $1 AND "garden_sections".id = $2`;

    // wait for dbResponse -> then query for each item of the DbResponse
    const dbRes = await pool.query(sqlQuery, [userId, selectionId]);

    if (dbRes.length <= 0) {
      res.sendStatus(200);
    }
    const newArrayOfData = [];
    for (const item of dbRes.rows) {
      // if dbResponse has a trefle_slug go ahead and make an api call for
      // each slug
      if (item.trefle_slug) {
        const data = await axios.get(
          `http://trefle.io/api/v1/plants/${item.trefle_slug}`,
          {
            params: {
              token: process.env.TREFLE_API_KEY,
            },
          }
        );
        newArrayOfData.push(data.data.data); // data.data -> gets back the data without headers
      }
    } // end for loop
    res.send(newArrayOfData);
  } catch (err) {
    console.error('GET - garden section an error occurred', err);
    res.sendStatus(500);
  }
});

module.exports = router;
