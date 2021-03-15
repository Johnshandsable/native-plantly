const axios = require('axios');

/* ----- NatureServe Data Expected Response -------

      dbRes.data.results = [] -> 
        scientificName: String
        primaryCommonName: String
        roundedGRank: String

        .speciesGlobal -> 
          kingdom: String
          phylum: String
          taxclass: String
          taxorder: String
          family: String
          genus: String
          ----------------
        Want an array of 20 items with 
          scientificName
          primaryCommonName 
          image_url -> Trefle API
          phylum
          kingdom
          class
          order 
          family 
          genus 
      */
async function bundleData(dataResults) {
  const clientData = [];
  for (const resultItem of dataResults) {
    /*
      bundles data in appropriate format to send back to client-side
    */
    clientData.push({
      natureServeid: resultItem.elementGlobalId,
      scientificName: resultItem.scientificName,
      primaryCommonName: resultItem.primaryCommonName,
      image: await getImageData(resultItem.scientificName),
      kingdom: resultItem.speciesGlobal.kingdom,
      phylum: resultItem.speciesGlobal.phylum,
      class: resultItem.speciesGlobal.taxclass,
      order: resultItem.speciesGlobal.taxorder,
      family: resultItem.speciesGlobal.family,
      genus: resultItem.speciesGlobal.genus,
    });
  }
  return clientData;
}

async function getImageData(scientificName) {
  // let imageURL = '';
  const imageData = await axios.get('https://trefle.io/api/v1/species/search', {
    params: {
      q: `${scientificName}`,
      token: process.env.TREFLE_API_KEY,
    },
  });
  // console.log('TREFLE', imageData.data.data);
  // for (index = 0; index < imageData.data.data.length; index++) {
  //   if (imageData.data.data[index].image_url === null) {
  //     continue;
  //   } else {
  //     imageURL = imageData.data.data[index].image_url; // OK
  //   }
  // }
  // return imageURL;
  // console.log(typeof imageData.data.data);
  return imageData.data.data[0];
}

module.exports = bundleData;
