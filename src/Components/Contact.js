import React from 'react'
import '../App.css'

import globe from '../assets/Icon.png'
import arrow from '../assets/icons8-up-arrow-48.png'

const Contact = () => {
    return (
        <div className='contact'>
            <svg className='contactSection' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f2ff" fill-opacity="1" d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div className="container">
                <div className="row contact-details">
                    <div className="col-md-6">
                        <h4>Our Bespoke Website <br/> Include The Following</h4>
                        <p className='para'> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum</p>
                        <button>CONTACT US<img src={arrow} alt="" /> </button>
                    </div>
                    <div className="col-md-6">
                        <div class="card w-100 mb-3 contact-card">
                            <div class="card-body">
                                <div className="contact-images">
                                <img alt="" class="img" src={globe} />
                                </div>
                                <h5 class="card-title my-4">Bespoke Design</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                                
                            </div>
                        </div>
                        <div class="card w-100 mb-3 contact-card">
                            <div class="card-body">
                                <div className="contact-images">
                                <img alt="" class="img" src={globe} />
                                </div>
                                <h5 class="card-title my-4 ">Mobile Optimised</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                                
                            </div>
                        </div>
                        <div class="card w-100 mb-3 contact-card">
                            <div class="card-body">
                                <div className="contact-images">
                                <img alt="" class="img" src={globe} />
                                </div>
                                <h5 class="card-title my-4">SEO Optimised</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
