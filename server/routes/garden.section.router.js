const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/* Helper function for get by id */
async function getData(trefle_slug) {
  try {
    const data = await axios.get(
      `http://trefle.io/api/v1/plants/${trefle_slug}`,
      {
        params: {
          token: process.env.TREFLE_API_KEY,
        },
      }
    );
    return data.data.data;
  } catch (err) {
    console.error('SERVER - getData() error occurred', err);
  }
}

router.get('/:id', async (req, res) => {
  try {
    const selectionId = req.params.id;
    const userId = req.user.id;
    // const userId = 5;
    // const selectionId = 1;

    console.log('user', userId);
    console.log('selection', selectionId);

    const sqlQuery = `
        SELECT "plants".id, "trefle_slug" 
        FROM "garden_sections" 
        JOIN "plants" ON "plants".section_id = "garden_sections".id
        WHERE "garden_sections".user_id = $1 AND "garden_sections".id = $2`;

    // wait for dbResponse -> then query for each item of the DbResponse
    const dbRes = await pool.query(sqlQuery, [userId, selectionId]);

    if (dbRes.length <= 0) {
      res.sendStatus(200);
    }

    let data = await Promise.all(
      dbRes.rows.map((item) => getData(item.trefle_slug))
    );

    const newArrayOfData = [];
    for (index = 0; index < dbRes.rows.length; index++) {
      newArrayOfData.push({
        id: dbRes.rows[index].id,
        plant: data[index],
      });
    }
    res.send(newArrayOfData);
  } catch (err) {
    console.error('GET - garden section an error occurred', err);
    res.sendStatus(500);
  }
});

module.exports = router;
