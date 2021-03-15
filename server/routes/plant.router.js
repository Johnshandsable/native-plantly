const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');

const bundleData = require('../modules/bundledata');

// const clientData = [];

router.get('/', async (req, res) => {
  const searchToken = 'coreopsis'; // Will be coming from client-side
  const searchState = 'MO'; // Will be coming from req.user.location

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
    console.log(bundledData);
    // console.table(bundledData.image.id);
    res.send(bundledData);
  } catch (err) {
    console.error('an error occurred getting info from NatureServe', err);
    res.sendStatus(500);
  }
});

/*
router.get('/plants', async (req, res) => {
  let plantsRes = await pool.query(`
    SELECT FROM user_plants
    WHERE user_id=$1
  `, [req.user.id]);
  /**
   * [
   *    {
   *      id: 7,
   *      treffle_id: 'akjsdfh987234kjasdf',
   *      natureserver_id: '0918324jnx'
   *    }
   * ]
   */
//  let allTheData = await Promise.all(plantsRes.rows.map(async plant => {
//   let treffleRes = await axios.get(`treffle.com/whatever/${plant.treffle_id}`);
//   let natureServerRes = await axios.get(`natureserver.com/whatever/${plant.natureserver_id}`);
//   return {
//     treffleData: treffleRes.data,
//     natureServerDat: natureServerRes.data

module.exports = router;
