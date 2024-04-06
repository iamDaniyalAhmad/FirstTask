import React from 'react'
import "../App.css"
import funnel from '../assets/funnel.png'

const Skills = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 skill  text-center">
                <h3>An Integrated Team For Unique Web  Design And Strategic Digital Marketing </h3>
            </div>
            <div className="col-md-12 skill-para  mt-3 text-center">
                <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam  accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam <br/> accumsan vestibulum in sit m accumsan.</p>
            </div>
            <div className="col-md-12 mt-5 funnel-image text-center">
              <img src={funnel} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills
