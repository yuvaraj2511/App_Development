import React from 'react'
import { Maincarouseldata } from './Maincarouseldata'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const maincarousel = () => {

    const items = Maincarouseldata.map((item)=> <img className='cursor-pointer' role='presentation' src={item.Image} alt=''/>)

  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default maincarousel