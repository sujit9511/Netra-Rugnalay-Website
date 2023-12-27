import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import "../assets/carimg1.jpg";
import "../Styles/caro.css";

function Caraousel() {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item>
        <img
          src="https://www.shropshire-eyecare.co.uk/Services/Childrens-Eye-Care/photo.jpg"
          text="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://hikmaheye.org/images/retina_services.png"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://basirclinic.com/en/wp-content/uploads/2018/10/lasek-min.jpg"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caraousel;
