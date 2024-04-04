import React from 'react'
import logo from "../assets/nav-bar.png";
import arrow from '../assets/icons8-up-arrow-48.png'
import "../App.css";

const MainSection = () => {
  return (
    <>
      <div className="wave-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,117.3C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <nav class="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
            </a>
          </div>
        </nav>
        <div className="main-section container">
          <h1>WEB MAGNETISM</h1>
          <p>Transforming Businesses with unique Web design and <br/> strategic digital marketing for impactful online visibility.</p>
          <button>GET A PROPOSAL <img src={arrow} alt="" /> </button>
        </div>
      </div>
      
    </>
  )
}

export default MainSection
