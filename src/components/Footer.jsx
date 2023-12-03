import React from 'react'
import logo2 from '../assets/logo2.png'
import Derechos from './Derechos'
const Footer = () => {
  const phoneNumber = '542804866673'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, estoy interesado en tus servicios.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  return (
    <div>
    <div className='contenedor-footer d-flex'>
    <div className='redes'>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="cssbuttons-io-button">
      Whastapp
            <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
            ></path>
        </svg>
                </div>
            </button>
        </a>
        <a href="https://www.instagram.com/bonitadesignails/">
            <button className="cssbuttons-io-button">
      Instagram
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
            ></path>
        </svg>
      </div>
    </button>
            </a>
        </div>
        <div className='logo-f'>
            <img src={logo2} alt="" />
        </div>
        <div className='direc'>
            <p>Email: carolina@hotmail.com</p>
            <p>Direccion: Puerto Madryn</p>
        </div>
    </div>
    <Derechos/>
            </div>
  )
}

export default Footer