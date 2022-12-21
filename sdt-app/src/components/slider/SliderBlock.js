import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../img/images/sl-1.jpeg'
import img2 from '../../img/images/sl-2.jpeg'
import img3 from '../../img/images/sl-3.jpeg'

import './slider.css'

const SliderBlock = () => {
  return (
    <div className='container'>
        <div className='title'>We provide a free interface to track income on your website</div>
        <Carousel className='carousel'>
                <div className='slider-wrapper'>
                    <img src={img1} width={100}/>
                </div>
                <div className='slider-wrapper'>
                    <img src={img2}width={100} />
                </div>
                <div className='slider-wrapper'>
                    <img src={img3} width={100}/>
                </div>
            </Carousel>
    </div>
  )
}

export default SliderBlock