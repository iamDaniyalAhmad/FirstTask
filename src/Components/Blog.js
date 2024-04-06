import React from 'react'
import '../App.css'
import card1 from '../assets/card1.png'


const Blog = () => {
 

  return (
    <div className="blog-wave blog">
      <svg className='blogSection' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,165.3C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <h6 className='text-center main-heading'>Latest Insight</h6>
      <div className="blog-section">
        <div class="card card1" style={{width:'18rem'}} >
          <img src={card1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Websites accesibility and why it matters</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet conss ...</p>
            <div className='date'>
              <p>25.01.2024</p>
              <p>Read more</p>
            </div>
          </div>
        </div>
        <div class="card card2 mx-5" style={{width:'18rem'}} >
          <img src={card1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Websites accesibility and why it matters</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet conss ...</p>
            <div className='date'>
              <p>25.01.2024</p>
              <p>Read more</p>
            </div>
          </div>
        </div>
        <div class="card card3" style={{width:'18rem'}} >
          <img src={card1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Websites accesibility and why it matters</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet conss ...</p>
            <div className='date'>
              <p>25.01.2024</p>
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
