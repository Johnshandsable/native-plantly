const axios = require('axios');

async function bundleDatav2(plantList) {
  let bundledData = [];
  // Execute all getImage axios calls at once

  let images = await Promise.all(
    plantList.map((plant) => getImage(plant.scientificName))
  );

  for (let index = 0; index < plantList.length; index++) {
    bundledData.push({
      natureServeid: plantList[index].uniqueId,
      scientificName: plantList[index].scientificName,
      primaryCommonName: plantList[index].primaryCommonName,
      image: images[index],
      kingdom: plantList[index].speciesGlobal.kingdom,
      phylum: plantList[index].speciesGlobal.phylum,
      class: plantList[index].speciesGlobal.taxclass,
      order: plantList[index].speciesGlobal.taxorder,
      family: plantList[index].speciesGlobal.family,
      genus: plantList[index].speciesGlobal.genus,
    });
  }
  return bundledData;
}

async function getImage(scientificName) {
  const imageData = await axios.get('https://trefle.io/api/v1/species/search', {
    params: {
      q: `${scientificName}`,
      token: process.env.TREFLE_API_KEY,
    },
  });
  return imageData.data.data[0]; // return the first item since it's the most relevant
}

module.exports = bundleDatav2;
