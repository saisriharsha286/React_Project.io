import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;