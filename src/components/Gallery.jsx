import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Gallery() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.shutterstock.com/image-vector/144p-resolution-icon-web-mobile-260nw-1351621202.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.shutterstock.com/image-vector/144p-video-frame-icon-design-260nw-1670269096.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.shutterstock.com/image-vector/video-size-resolution-icon-labeling-260nw-2012124281.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  )
}

export default Gallery
