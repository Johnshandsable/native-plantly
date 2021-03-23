const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const bundleDatav2 = require('../modules/bundledatav2');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:token', async (req, res) => {
  try {
    const searchToken = req.params.token; // Will be coming from client-side
    const searchState = req.user.location; // Will be coming from req.user.location
    console.log('searchToken:', searchToken);
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
    const bundledData = await bundleDatav2(listOfPlants.data.results);
    console.log(bundledData);
    res.send(bundledData);
  } catch (err) {
    console.error('an error occurred getting info from NatureServe', err);
    res.sendStatus(500);
  }
});

module.exports = router;
