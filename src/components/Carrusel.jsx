import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../assets/intro.jpg'

const Carrusel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img src={imagen} alt="" className='imagen1 img-fluid'/>
          </Carousel.Item>
        </Carousel>
      );
}

export default Carrusel