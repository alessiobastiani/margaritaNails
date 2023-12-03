import React, { useEffect } from 'react';
import uñasUno from '../assets/uñas1.jpg';
import uñasDos from '../assets/uñas2.jpg';
import capping from '../assets/capping.jpg'
import softgel1 from '../assets/soft.jpeg'
import esculpidas1 from '../assets/esculpidas1.jpeg'
import esculpidas2 from '../assets/esculpidas2.jpeg'
import soft2 from '../assets/soft2.jpeg'
import semi2 from '../assets/semi2.jpeg'

const ServicioPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className='contenedor-uñas'>
        <div id='softgel' className='softgel'>
            <h1>SERVICIO SOFTGEL</h1>
            <p>son un nuevo método de extensión en tips (press on nails) que está revolucionando el mundo de las uñas. Ahora mismo es el sistema favorito de las celebrities en Los Ángeles, por su rapidez, comodidad y aspecto natural.</p>
            <div className='img-soft'>
              <img src={softgel1} alt="" />
              <img src={soft2} alt="" />
            </div>
        </div>
        <div id='semipermanente' className='softgel'>
            <h1>SERVICIO SEMIPERMANENTE</h1>
            <p>Es un tipo de manicura que se hace cada 2-3 semanas; a diferencia de los esmaltes clásicos, la manicura semipermanente no requiere que se retire y se vuelva a poner de nuevo con tanta frecuencia, todo es gracias a su durabilidad.</p>
            <div className='img-soft'>
              <img src={semi2} alt="" />
              <img src={uñasDos} alt="" />
            </div>
        </div>
        <div id='esculpidas' className='softgel'>
            <h1>SERVICIO ESCULPIDAS</h1>
            <p>Son extensiones que se construyen a partir de la uña natural con material acrílico o gel. Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas más largas. Algo que las hace sumamente atractivas, ya que se puede moldear la forma y longitud para obtener varios estilos.</p>
            <div className='img-soft'>
              <img src={esculpidas1} alt="" />
              <img src={esculpidas2} alt="" />
            </div>
        </div>
        <div id='nivelacion' className='softgel'>
            <h1>SERVICIO NIVELACION</h1>
            <p>son un nuevo método de extensión en tips (press on nails) que está revolucionando el mundo de las uñas. Ahora mismo es el sistema favorito de las celebrities en Los Ángeles, por su rapidez, comodidad y aspecto natural.</p>
            <div className='img-soft'>
              <img src={uñasUno} alt="" />
              <img className='wacho'  src={capping} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ServicioPage