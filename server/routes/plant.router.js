const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const bundleData = require('../modules/bundledata');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', async (req, res) => {
  const searchToken = 'Sunflower'; // Will be coming from client-side
  const searchState = req.user.location; // Will be coming from req.user.location

  try {
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
    // console.log(listOfPlants.data.results);
    const bundledData = await bundleData(listOfPlants.data.results);
    // console.log(bundledData);
    // console.table(bundledData.image.id);
    res.send(bundledData);
  } catch (err) {
    console.error('an error occurred getting info from NatureServe', err);
    res.sendStatus(500);
  }
}); // end of GET by location, species

router.get('/:slug', (req, res) => {
  const trefleSlug = req.params.slug;
  console.log('GET - plant by slug');
  axios
    .get(`http://trefle.io/api/v1/plants/${trefleSlug}`, {
      params: {
        token: process.env.TREFLE_API_KEY,
      },
    })
    .then((dbRes) => {
      // console.log(dbRes.data.data);
      res.send(dbRes.data.data);
    })
    .catch((err) => {
      console.error('GET DETAILS - an error occurred', err);
      res.sendStatus(500);
    });
}); // end of GET details

router.post('/', rejectUnauthenticated, (req, res) => {
  /*
  Incoming -> 
    req.user.id: Integer
    trefle_slug: String
    natureserve_id: String
    section_id: Integer
  */
  const userId = req.user.id;
  const trefleSlug = req.body.trefle_slug;
  const sectionId = req.body.section_id;

  const sqlQuery = `INSERT INTO "plants" ("user_id", "trefle_slug", "section_id") VALUES ($1, $2, $3);`;
  pool
    .query(sqlQuery, [userId, trefleSlug, sectionId])
    .then((dbRes) => {
      console.log('POST - plant', dbRes);
      res.sendStatus(201); // CREATED
    })
    .catch((err) => {
      console.error('POST - plant an error occurred', err);
    });
});

module.exports = router;
