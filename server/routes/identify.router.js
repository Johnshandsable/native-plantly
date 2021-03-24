// const express = require('express');
// const pool = require('../modules/pool');
// const fs = require('fs');
// const router = express.Router();

// // const file = '../test/pic1.JPG';
// const base64file = fs.readFileSync(file, 'base64');

// router.get('/', (req, res) => {
//   const data = {
//     api_key: process.env.PLANT_ID_KEY,
//     images: base64file,
//     modifiers: ['crops_fast', 'similar_images'],
//     plant_language: 'en',
//     plant_details: [
//       'common_names',
//       'url',
//       'name_authority',
//       'wiki_description',
//       'taxonomy',
//       'synonyms',
//     ],
//   };
//   axios
//     .post('https://api.plant.id/v2/identify', data)
//     .then((dbRes) => {
//       console.log('Success:', dbRes.data);
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.error('Error: ', error);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;
