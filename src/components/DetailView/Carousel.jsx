function Carousel({ carouselArray }) {
  return (
    <div>
      {carouselArray.map((carouselImg, index) => {
        <img key={index}></img>;
      })}
    </div>
  );
}

export default Carousel;
