import { useState } from 'react';

// MATERIAL UI
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel({ bundledData }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${bundledData[currentImage]})` }}
      >
        {/* {bundledData.map((carouselImg, index) => {
        <img key={index}></img>;
      })} */}
        <div
          className="left"
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currentImage < bundledData.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
