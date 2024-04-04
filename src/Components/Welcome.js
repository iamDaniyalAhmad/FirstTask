import React from "react";
import "../App.css";
import arrow from "../assets/icons8-up-arrow-48.png";
import image1 from "../assets/Rectangle 42413.png";
import image2 from "../assets/Rectangle 42414.png";
import image3 from "../assets/Rectangle 42411.png"
import image4 from "../assets/Rectangle 42412.png"

const Welcome = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="boldHeading mb-5">Welcome To Web Magnetism</h2>
            <p>
              Your hub for bespoke web design and digital marketing success. We
              seamlessly merge creativity and <span className="boldText" >SEO expertise</span>  to craft visually
              stunning websites that magnetize audiences.<br/><br/> Our digital marketing,
              from SEO mastery to impactful campaigns, ensures your brand's
              resonance online. At Web Magnetism, we're not just designers;
              <span className="boldText"> we're digital architects, </span>sculpting unique online experiences that
              elevate your brand.<br/><br/> Navigate the digital landscape with confidence
              – choose Web Magnetism for tailored web design and strategic
              digital marketing, where innovation meets results for a compelling
              online journey.
            </p>

            <button className="aboutButton">
              About Us
              <img src={arrow} alt="" />{" "}
            </button>
          </div>
          <div className="col-md-6">
          <div class="image-container">
            <div className="image">
            <img src={image3} alt="" srcset="" className="horizontal" />
            <img src={image1}  alt="" className="horizontal-image"/>
            <img src={image4} alt="" className="vertical"/>
           
            </div>
            <div className="image-2">
            
            <img src={image2} alt="" className="vertical-image" />
            </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
