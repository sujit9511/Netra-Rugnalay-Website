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
          src="https://as2.ftcdn.net/v2/jpg/02/26/10/79/1000_F_226107911_EVYZZCnILvbKB7JNF4nApalxZ79jZMfe.jpg"
          text="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://miro.medium.com/v2/resize:fit:1000/1*y76r8MzO8sGy6qzrQJHJvA.jpeg"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://publications.computer.org/computer-magazine/wp-content/uploads/sites/25/2018/11/ocular-biometrics1000x400.jpg"
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
