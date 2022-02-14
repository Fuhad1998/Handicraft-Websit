import React from "react";
import { Card, Col } from "react-bootstrap";

const Explore = ({ good }) => {
    console.log(good)
  const { name, detail, img, price } = good;
  return (
    <Col xs={12} sm={6} md={4} className="g-4 ">
    <Card className="h-100 p-3 shadow px-5">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>
          Price BD: <span className="text-success">{price}</span>
        </Card.Title>
        <Card.Title>
          Detail:<span>{detail}</span>
        </Card.Title>
        <button type="button" className="btn btn-danger">Add To Cart</button>
      </Card.Body>
    </Card>
  </Col>
  );
};

export default Explore;
