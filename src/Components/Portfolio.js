import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/portfolio 1.png'
import p2 from '../assets/portfolio 2.png'
import p3 from '../assets/portfolio 3.png'
import arrow from "../assets/icons8-up-arrow-48.png";

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
    <div className="container portolios">
        <div className="row">
            <div className="col-lg-7">

                <h6>Our Work</h6>
                <p>We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</p>
            </div>
            <div className="col-lg-5 portfolioButton">
            <button className="aboutButton">
              View Full Portfolio
              <img src={arrow} alt="" />{" "}
            </button>
            </div>
        </div>
    </div>
    <div className="container portfolioSection">
        <div className="row">
        <Slider {...settings}>
            <div className="col-lg-4">
                <img src={p1} alt="" />
                <h6>REDESIGN OF B2B WEBSITE</h6>
                <p>Web design</p>
            </div>
            <div className="col-lg-4">
                <img src={p3} alt="" />
                <h6>MOBILE APPLICATION</h6>
                <p>App development</p>
            </div>
            <div className="col-lg-4">
                <img src={p2} alt="" />
                <h6>E-COMMERCE SHOP</h6>
                <p>Web development</p>
            </div>
            <div className="col-lg-4">
                <img src={p1} alt="" />
                <h6>REDESIGN OF B2B WEBSITE</h6>
                <p>Web design</p>
            </div>
            <div className="col-lg-4">
                <img src={p3} alt="" />
                <h6>MOBILE APPLICATION</h6>
                <p>App development</p>
            </div>
            <div className="col-lg-4">
                <img src={p2} alt="" />
                <h6>E-COMMERCE SHOP</h6>
                <p>Web development</p>
                <p>Web development</p>
            </div>
            <div className="col-lg-4">
                <img src={p1} alt="" />
                <h6>REDESIGN OF B2B WEBSITE</h6>
                <p>Web design</p>
            </div>
            <div className="col-lg-4">
                <img src={p3} alt="" />
                <h6>MOBILE APPLICATION</h6>
                <p>App development</p>
            </div>
            <div className="col-lg-4">
                <img src={p2} alt="" />
                <h6>E-COMMERCE SHOP</h6>
                <p>Web development</p>
            </div>
        </Slider>
        </div>
    </div>
    </>
  )
}

export default Portfolio
