import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

function Carrousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  const photoArray = [slide_one, slide_two, slide_three];
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
          {photoArray.map((item,index) => {
           return <div key={index}>
            <div
              className="carrousel_image"
              style={{
                background: `url(${item}) center center`,
                height: `${window.innerHeight}px`,
              }}
            ></div>
            </div>
          })}
      </Slider>
    </div>
  );
}

export default Carrousel;
