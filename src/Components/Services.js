import React from 'react'
import bespoke from '../assets/Rectangle 42457.png'
import Digital from '../assets/digital.jpg'
import App from '../assets/App.png'
import arrow from '../assets/icons8-up-arrow-48.png'
import '../App.css'

const Services = () => {
  return (

    <>
    <div className='container services' >
        <div className='row'>
            <h5 className='text-center'> Overview of Services</h5>
            <div className='col-md-4 services-card'>
                <img src={bespoke} alt="" className='img'/>
                <h6>Bespoke Web Design</h6>
                <p className='para'> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum</p>
                <button>Bespoke Web Design<img src={arrow} alt="" /> </button>
            </div>
            <div className='col-md-4 services-card'>
                <img src={App} alt=""  className='img' />
                <h6>App Development</h6>
                <p className='para'> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum</p>
                <button>Bespoke Web Design<img src={arrow} alt="" /> </button>
            </div>
            <div className='col-md-4  services-card'>
                <img src={Digital} alt=""  className='img' />
                <h6>Digital Marketing</h6>
                <p className='para'> Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum</p>
                <button>Bespoke Web Design<img src={arrow} alt="" /> </button>
            </div>
            </div>
    </div>
    </>
  )
}

export default Services
