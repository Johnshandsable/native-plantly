const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const bundleDatav2 = require('../modules/bundledatav2');

router.get('/', async (req, res) => {
  try {
    const searchToken = 'Sunflower'; // default search value
    let searchState = 'MO';

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
          page: 0,
          recordsPerPage: 10,
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
    const bundledData = await bundleDatav2(listOfPlants.data.results);
    console.log('SERVER - GET - getting plants by location success!');
    res.send(bundledData);
  } catch (err) {
    console.error('an error occurred getting info from NatureServe', err);
    res.sendStatus(500);
  }
}); // end of GET by location, species

module.exports = router;
