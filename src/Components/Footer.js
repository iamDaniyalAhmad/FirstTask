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
            {/* <div className="col-lg-6"></div>
			<div class="col-lg-3">
				<div class="lc-block mb-4">
					<img class="img-fluid" alt="logo" src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_connected_world_wuay.svg" style={{maxHeight:'10vh'}}/>
				</div>
				<div class="lc-block small">
					<div editable="rich">
						<p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper matti pibus leo.</p>
					</div>
				</div>
				
				<div class="lc-block py-2">
					<a class="text-decoration-none" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em" lc-helper="svg-icon" fill="var(--bs-light)">
							<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
						</svg>
					</a>
					<a class="text-decoration-none" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" lc-helper="svg-icon" fill="var(--bs-light)">
							<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
						</svg>
					</a>
					<a class="text-decoration-none" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" lc-helper="svg-icon" fill="var(--bs-light)">
							<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
						</svg>
					</a>
					<a class="text-decoration-none" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em" lc-helper="svg-icon" fill="var(--bs-light)">
							<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
						</svg>
					</a>
					<a class="text-decoration-none" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" lc-helper="svg-icon" fill="var(--bs-light)">
							<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
						</svg>
					</a>
				</div>

			</div>
			<div class="col-lg-2 offset-lg-1">
				<div class="lc-block mb-4">
					<div editable="rich">
						<h4>Get Started</h4>
					</div>
				</div>
				
				<div class="lc-block small">
					<div editable="rich">
						<p>Tutorial</p>
						<p>Resources
							<br/>
						</p>
						<p>Docs</p>
						<p>Example</p>
					</div>
				</div>
				
			</div>
			<div class="col-lg-2 offset-lg-1">
				<div class="lc-block mb-4">
					<div editable="rich">
						<h4>About us</h4>
					</div>
				</div>
				
				<div class="lc-block small">
					<div editable="rich">
						<p>Story</p>
						<p>Work with us</p>
						<p>Blog</p>
						<p>News</p>
					</div>
				</div>
				
			</div>
			<div class="col-lg-2 offset-lg-1">
				<div class="lc-block mb-4">
					<div editable="rich">
						<h4>Downloads</h4>
					</div>
				</div>
				
				<div class="lc-block small">
					<div editable="rich">
						<p>Vertex 1.2</p>
						<p>Templates</p>
						<p>Sounds</p>
						<p>Gradients</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<div class="py-5 container">
		<div class="row">
			<div class="col-6 small">
				<div class="lc-block">
					<div editable="rich">
						<p>Copyright © My Company 2020</p>
					</div>
				</div>
				
			</div>
			<div class="col-6 text-end small">
				<div class="lc-block">
					<div editable="rich">
						<p>
							<a class="text-decoration-none" href="#">License Details</a> -
							<a class="text-decoration-none" href="#">Terms &amp; Conditions</a>
						</p>
					</div>
				</div>
				
			</div>*/}
		</div> 
	</div>
</section>
 
 
  
    </>
  )
}

export default Footer
