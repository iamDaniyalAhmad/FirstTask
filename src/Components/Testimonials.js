import React from 'react'
import user1 from '../assets/Ellipse 2486.png'
import user2 from '../assets/Ellipse 2486 (1).png'
import user3 from '../assets/Ellipse 2486 (2).png'
import star from '../assets/icons8-star-25 (1).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };
  return (
   <>
   
    <div className="container testimonial">
        <div className="row testimonials">
            <h6 className='text-center main-heading'>What Our Client Say About Us</h6>
            <Slider {...settings}>
            <div className="col-lg-3 testimonial-card  shadow ">
                <div className='imageSection'>
                    <img src={user1} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span className='text-end'>Read more</span>
                </h6>
                
            </div>
            <div className="col-lg-3 testimonial-card  shadow">
                <div className='imageSection'>
                    <img src={user2} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span>Read more</span>
                </h6>
                
            </div>
            <div className="col-lg-3 testimonial-card  shadow">
                <div className='imageSection'>
                    <img src={user3} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span>Read more</span>
                </h6>
                
            </div>
            <div className="col-lg-3 testimonial-card  shadow ">
                <div className='imageSection'>
                    <img src={user1} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span className='text-end'>Read more</span>
                </h6>
                
            </div>
            <div className="col-lg-3 testimonial-card  shadow">
                <div className='imageSection'>
                    <img src={user2} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span>Read more</span>
                </h6>
                
            </div>
            <div className="col-lg-3 testimonial-card  shadow">
                <div className='imageSection'>
                    <img src={user3} className='userImage' alt="" />
                    <div>
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    <img src={star} className='star' alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                <h6>Maria Bend, Director <span>Read more</span>
                </h6>
                
            </div>
           
            </Slider>
            
        </div>
    </div>

  
   </>
  )
}

export default Testimonials
