import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../../handicraft img/banner/banner3_2.jpg'
const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-400"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <Link className=" explore-btn text-white bg-primary p-2 rounded" to="/explore">More products</Link>
          </Carousel.Caption>
        </Carousel.Item>
       
        
      
      </Carousel>
    </div>
  );
};

export default Banner;
