function bundleCarouselData(images) {
  const newArray = [];
  console.log(typeof images);
  console.log(images);
  for (const [key, value] of Object.entries(images)) {
    for (const item of images[key]) {
      if (item.image_url) {
        newArray.push(item.image_url);
      }
    }
  }
  return newArray;
}

export default bundleCarouselData;
