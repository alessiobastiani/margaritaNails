import React from 'react'
import Carrusel from './Carrusel'
import desing from '../assets/desing.gif'
import SeccionImagenes from './SeccionImagenes'
import Regalo from './Regalo'
import Atada from './Atada'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Carrusel/>
        <div className='inicio d-flex'> 
            <img className='desing' src={desing} alt="" />
            <div className='texto-intro'>
                <h1>Manicuria profesional</h1>
                <p>En margarita nos apasiona realzar tu belleza a través de nuestras habilidades en manicura. En cada detalle, desde la elección de colores hasta la precisión en la forma, trabajamos con amor y dedicación. Tu felicidad es la nuestra, y queremos que cada visita a nuestro salón de uñas sea una experiencia que nunca olvidarás</p>
                <Link to= "/conocenos">
                <button className='btn-conocenos btn'>Conocenos</button>
                </Link>
            </div>
        </div>
        <SeccionImagenes/>
        <Regalo/>
        <Atada/>
    </div>
  )
}

export default Home