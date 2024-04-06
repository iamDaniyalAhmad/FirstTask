import React from "react";
import group from "../assets/Group 121847.png";
import arrow from "../assets/icons8-up-arrow-48.png";
import img1 from "../assets/Img.png";
import img2 from "../assets/Img (1).png";
import img3 from "../assets/Img (2).png";
import img4 from "../assets/Img (3).png";
import img5 from "../assets/Img (4).png";
import img6 from "../assets/logos_tiktok-icon.png";
const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="container py-5">
          <div class="row">
            <div className="col-lg-6">
              <img src={group} alt="" />
            </div>
            <div className="col-lg-6 footer-button">
              <button className="aboutButton">
                Contact Us
                <img src={arrow} alt="" />{" "}
              </button>
            </div>
            <hr className="horizontal-line" />

            <div className="col-lg-6">
              <h6>Services</h6>
              <hr style={{ width: "100px",border: "2px solid #fff" }}  />
              <div className="footer-services">
                <div>
                  <h6>Digital Marketing</h6>
                  <li className="footer-list">Email Nurture</li>
                  <li className="footer-list">SEO</li>
                  <li className="footer-list">Social Media Marketing</li>
                  <li className="footer-list">Conversion Rate Optimization</li>
                  <li className="footer-list">Copy Writing</li>
                  <li className="footer-list">Email Writing</li>
                  <li className="footer-list">Remarketing</li>
                  <li className="footer-list">PPC</li>
                </div>
                <div>
                  <h6>Bespoke Web Design</h6>
                  <li className="footer-list">Web Design</li>
                  <li className="footer-list">Web Redesign</li>
                  <li className="footer-list">UI/UX Design</li>
                  <li className="footer-list">Brand Identity and Logo</li>
                  <li className="footer-list">App Development</li>
                </div>
              </div>
            </div>

            <div className="col-lg-6 footer-services">
              <div>
                <h6>Home</h6>
                <hr style={{ width: "100px", border: "2px solid #fff" }} />
                <h6>About Us</h6>
                <hr style={{ width: "100px", border: "2px solid #fff" }} />
                <h6>Contact Us</h6>
                <hr style={{ width: "100px", border: "2px solid #fff" }} />
                <p style={{ marginTop: "60px",opacity:'0.5' }}>
                  United Kington, <br /> TW4 7LU <br />
                  London
                </p>
              </div>
              <div>
                <h6>Resources</h6>
                <hr style={{ width: "100px", border: "2px solid #fff" }} />
                <li className="footer-list">Our Work</li>
                <li className="footer-list">Insights</li>
              </div>

              <div>
                <h6>Social Media</h6>
                <hr style={{ width: "100px", border: "2px solid #fff" }} />
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img1} alt="" /> Facebook{" "}
                  </li >
                </div>
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img2} alt="" /> Instagram{" "}
                  </li>
                </div>
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img3} alt="" /> Twitter{" "}
                  </li>
                </div>
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img4} alt="" /> Youtube{" "}
                  </li>
                </div>
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img5} alt="" /> Telegram {" "}
                  </li>
                </div>
                <div className="social-media">
                  <li className="footer-lists">
                    {" "}
                    <img src={img6} alt="" /> Tiktok{" "}
                  </li>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <p className="text-center footer-paragraph">
                ©Copyright. 2024 Web Magnetism All rights reserved I Terms and
                condition I Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
