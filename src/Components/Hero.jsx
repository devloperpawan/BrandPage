import React from 'react'

const Hero = () => {
  return (
    <div className='hero component'>
      <div className="heroContent">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
      </p>
      <div className="herobtn">
        <button className='btn1'>Shop Now</button>
        <button className='btn2'>Category</button>
      </div>
      <p>Also Available On</p>
      <div className="shopLogo">
        <img src="flipkart.png" alt="flipkart" />
        <img src="amazon.png" alt="amazon" />
      </div>
      </div>
      <div className="heroImage">
      <img src="shoe_image.png" alt="shoes logo" />
      </div>
    </div>
  )
}

export default Hero
