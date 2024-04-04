import React from 'react'
import "../App.css"
import click from '../assets/Vector.png'
import globe from '../assets/Icon.png'
import comment from '../assets/Icon (1).png'


const Feature = () => {
  return (
    <>
{/* <div class="container-fluid feature">
<svg className='featureSection' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,181.3C1120,203,1280,245,1360,266.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
	<div class="row">
		<div class="col-md-12 text-center">		
				<h2 editable="inline" class="display-2 mb-0"><b>Why Choose Us</b></h2>
		</div>
	</div> */}
	<div className='container-card'>
	<div className="container">
	<div class="row mt-4 ">
	<h3 class=" featureHeading text-center mb-5">Why Choose Us</h3>
		<div class="col-md-4">
			<div class="p-lg-4  features p-4 ">
				<div className='feature-card'>
					<div className='feature-images'>
					<img alt="" class="img" src={click} />
					</div>
					<h4 >Take Control of Your Entire Marketing Landscape</h4>
				</div>
					<p >We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>

			
			</div>
		</div>
		<div class="col-md-4">
			<div class="p-lg-4  features p-4 ">
				<div className='feature-card'>
					<div className='feature-images'>
					<img alt="" class="img" src={globe} />
					</div>
					<h4 >Your Business's Dedicated Marketing Wing</h4>
				</div>
					<p >Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.</p>

			
			</div>
		</div>
		<div class="col-md-4">
			<div class="p-lg-4  features p-4 ">
				<div className='feature-card'>
					<div className='feature-images'>
					<img alt="" class="img" src={comment}  />
					</div>
					<h4 >A Reliable Collaborator</h4>
				</div>
					<p >Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.</p>
			</div>
		</div>
		
	</div>
{/* </div> */}
</div>
</div>
 
  
    </>
  )
}

export default Feature
