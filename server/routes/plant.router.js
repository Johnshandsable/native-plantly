const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const bundleData = require('../modules/bundledata');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', async (req, res) => {
  try {
    const searchToken = 'Sunflower'; // Will be coming from client-side
    let searchState = '';

    if (req.user.location === undefined) {
      /*
        if user is not logged in but wants to view the home page, the page 
        will display plants from the midwest.
      */
      searchState = 'MO';
    } else {
      searchState = req.user.location;
    }

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
});

module.exports = router;
