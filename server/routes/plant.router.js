const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const bundleData = require('../modules/bundledata');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Deprecated for v2
router.get('/', async (req, res) => {
  try {
    const searchToken = 'Sunflower'; // default search value
    let searchState = 'MO';

    // try {
    //   /*
    //     if user is not logged in but wants to view the home page, the page
    //     will display plants from the midwest.
    //   */
    //   searchState = req.user.location;
    // } catch (err) {
    //   console.log('defaulting searchState to MO');
    //   searchState = 'MO';
    // }

    console.log('SERVER - GET - get plants by location', searchState);

    const listOfPlants = await axios.post(
      'https://explorer.natureserve.org/api/data/speciesSearch',
      {
        criteriaType: 'species',
        textCriteria: [
          {
            paramType: 'textSearch',
            searchToken: `${searchToken}`,
            matchAgainst: 'allNames',
            operator: 'similarTo',
          },
        ],
        statusCriteria: [],
        locationCriteria: [
          {
            paramType: 'subnation',
            subnation: `${searchState}`,
            nation: 'US',
          },
        ],
        pagingOptions: {
          page: null,
          recordsPerPage: null,
        },
        recordSubtypeCriteria: [],
        modifiedSince: null,
        locationOptions: {
          origin: 'onlyNatives',
        },
        classificationOptions: {
          includeInfraspecies: false,
          includeProvisional: true,
          includeNonstandard: true,
        },
        speciesTaxonomyCriteria: [
          {
            paramType: 'informalTaxonomy',
            informalTaxonomy: 'Plants',
          },
        ],
      } // above info sent to NatureServe API
    ); // end of POST request
    const bundledData = await bundleData(listOfPlants.data.results);
    console.log('SERVER - GET - getting plants by location success!');
    res.send(bundledData);
  } catch (err) {
    console.error('an error occurred getting info from NatureServe', err);
    res.sendStatus(500);
  }
}); // end of GET by location, species

router.get('/:slug', (req, res) => {
  const trefleSlug = req.params.slug;

  console.log('SERVER - GET - getting plant by slug');

  axios
    .get(`http://trefle.io/api/v1/plants/${trefleSlug}`, {
      params: {
        token: process.env.TREFLE_API_KEY,
      },
    })
    .then((dbRes) => {
      console.log('SERVER - GET - getting plant by slug success!');
      res.send(dbRes.data.data);
    })
    .catch((err) => {
      console.error('SERVER - GET - an error occurred', err);
      res.sendStatus(500);
    });
}); // end of GET details

router.post('/', rejectUnauthenticated, (req, res) => {
  /*
  Incoming -> 
    req.user.id: Integer
    trefle_slug: String
    section_id: Integer
  */
  const userId = req.user.id;
  const trefleSlug = req.body.trefle_slug;
  const sectionId = req.body.section_id;
  const sqlQuery = `INSERT INTO "plants" 
  ("user_id", "trefle_slug", "section_id") 
  VALUES ($1, $2, $3);`;

  console.log('SERVER - POST - inserting plant into database');

  pool
    .query(sqlQuery, [userId, trefleSlug, sectionId])
    .then((dbRes) => {
      console.log(
        'SERVER - POST - plant inserted into database success!',
        dbRes
      );
      res.sendStatus(201); // CREATED
    })
    .catch((err) => {
      console.error('POST - plant an error occurred', err);
    });
}); // end of POST

router.delete('/:id/:sectionId', rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const plantId = req.params.id;
  const sectionId = req.params.sectionId;
  console.log('req.params', req.params);
  const sqlQuery = `DELETE 
  FROM "plants"
  WHERE "user_id" = $1 AND "id" = $2 AND "section_id" = $3 RETURNING "section_id";`;

  console.log('SERVER - DELETE - deleting from plants');

  pool
    .query(sqlQuery, [userId, plantId, sectionId])
    .then((dbRes) => {
      console.log('SERVER - DELETE - deleting from plants success!');
      console.log('dbRes', dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('SERVER - DELETE - an error occurred', err);
      res.sendStatus(500);
    });
}); // end of DELETE

module.exports = router;
