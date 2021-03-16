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
      */
async function bundleData(dataResults) {
  const clientData = [];
  for (const resultItem of dataResults) {
    /*
      bundles data in appropriate format to send back to client-side
    */
    clientData.push({
      natureServeid: resultItem.uniqueId,
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
  const imageData = await axios.get('https://trefle.io/api/v1/species/search', {
    params: {
      q: `${scientificName}`,
      token: process.env.TREFLE_API_KEY,
    },
  });
  return imageData.data.data[0]; // return the first item since it's the most relevant
}

module.exports = bundleData;
