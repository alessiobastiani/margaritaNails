import React, { useEffect } from 'react';
import uñasUno from '../assets/uñas1.jpg';
import uñasDos from '../assets/uñas2.jpg';

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
              <img src={uñasUno} alt="" />
              <img src={uñasDos} alt="" />
            </div>
        </div>
        <div id='semipermanente' className='softgel'>
            <h1>SERVICIO SEMIPERMANENTE</h1>
            <p>Es un tipo de manicura que se hace cada 2-3 semanas; a diferencia de los esmaltes clásicos, la manicura semipermanente no requiere que se retire y se vuelva a poner de nuevo con tanta frecuencia, todo es gracias a su durabilidad.</p>
            <div className='img-soft'>
              <img src={uñasUno} alt="" />
              <img src={uñasDos} alt="" />
            </div>
        </div>
        <div id='esculpidas' className='softgel'>
            <h1>SERVICIO ESCULPIDAS</h1>
            <p>Son extensiones que se construyen a partir de la uña natural con material acrílico o gel. Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas más largas. Algo que las hace sumamente atractivas, ya que se puede moldear la forma y longitud para obtener varios estilos.</p>
            <div className='img-soft'>
              <img src={uñasUno} alt="" />
              <img src={uñasDos} alt="" />
            </div>
        </div>
        <div id='nivelacion' className='softgel'>
            <h1>SERVICIO NIVELACION</h1>
            <p>son un nuevo método de extensión en tips (press on nails) que está revolucionando el mundo de las uñas. Ahora mismo es el sistema favorito de las celebrities en Los Ángeles, por su rapidez, comodidad y aspecto natural.</p>
            <div className='img-soft'>
              <img src={uñasUno} alt="" />
              <img src={uñasDos} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ServicioPage