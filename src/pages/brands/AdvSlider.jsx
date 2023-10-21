import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdvSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/2.jpg" alt="" />
        </div>
        {/* <div>
          <img src="/images/3.jpeg" alt="" />
        </div> */}
        <div>
          <img src="/images/4.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default AdvSlider;
