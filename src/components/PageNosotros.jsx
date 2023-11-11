import React from 'react'
import carito from '../assets/carito.png'
import Testimonio from './Testimonio'

const PageNosotros = () => {
  return (
    <div className='contenedor-nosotros'>
        <section className='intro-nosotros d-flex'>
            <img src={carito} alt="" />
            <div className='text-nosotros'>
                <h2>Bonita Nails</h2>
                <p> Hola, soy Carito, la mente y las manos detrás de Bonita Nails. Me enorgullece ofrecer un servicio de manicura de alta calidad, donde la atención personalizada se combina con la pasión por realzar la belleza de tus manos y uñas.</p>
            </div>
        </section>
      <Testimonio/>
    </div>
  )
}

export default PageNosotros