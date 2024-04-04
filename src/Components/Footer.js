import React from 'react'
import group from '../assets/Group 121847.png'
import arrow from "../assets/icons8-up-arrow-48.png";
import img1 from '../assets/Img.png'
import img2 from '../assets/Img (1).png'
import img3 from '../assets/Img (2).png'
import img4 from '../assets/Img (3).png'
import img5 from '../assets/Img (4).png'
import img6 from '../assets/logos_tiktok-icon.png'
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
            <hr className='horizontal-line'/>

            <div className="col-lg-6">
                <h6>Services</h6>
                <hr/>
                <div className='footer-services'>
                <div>
                    <h6>Digital Marketing</h6>
                    <p>Email Nurture</p>
                    <p>SEO</p>
                    <p>Social Media Marketing</p>
                    <p>Conversion Rate Optimization</p>
                    <p>Copy Writing</p>
                    <p>Email Writing</p>
                    <p>Remarketing</p>
                    <p>PPC</p>
                </div>
                <div>
                    <h6>Bespoke Web Design</h6>
                    <p>Web Design</p>
                    <p>Web Redesign</p>
                    <p>UI/UX Design</p>
                    <p>Brand Identity and Logo</p>
                    <p>App Development</p>
                    
                </div>

            </div>

            
                
                
            </div>


            <div className="col-lg-6 footer-services">
                <div>
                <h6>Home</h6>
                <hr style={{width:'100px',border:'2px solid #fff'}}/>
                <h6>About Us</h6>
                <hr style={{width:'100px',border:'2px solid #fff'}}/>
                <h6>Contact Us</h6>
                <hr style={{width:'100px',border:'2px solid #fff'}}/>
                <p style={{marginTop:'60px'}}>United Kington, <br/> TW4 7LU  <br/>London</p>
                </div>
                <div>
                <h6>Resources</h6>
                <hr style={{width:'100px',border:'2px solid #fff'}}/>
                <p>Our Work</p>
                <p>Insights</p>
                </div>    

                <div>
                <h6>Social Media</h6>
                <hr style={{width:'100px',border:'2px solid #fff'}}/>
                    <div className='social-media'>
                        <p> <img  src={img1} alt="" /> Facebook </p>
                    </div>
                    <div className='social-media'>
                        <p> <img  src={img2} alt="" /> Facebook </p>
                    </div>
                    <div className='social-media'>
                        <p> <img  src={img3} alt="" /> Facebook </p>
                    </div>
                    <div className='social-media'>
                        <p> <img  src={img4} alt="" /> Facebook </p>
                    </div>
                    <div className='social-media'>
                        <p> <img  src={img5} alt="" /> Facebook </p>
                    </div>
                    <div className='social-media'>
                        <p> <img  src={img6} alt="" /> Facebook </p>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <p className='text-center'>©Copyright. 2024 Web Magnetism All rights reserved I Terms and condition I Privacy Policy.</p>
            </div>
           
		</div> 
	</div>
</section>
 
 
  
    </>
  )
}

export default Footer
