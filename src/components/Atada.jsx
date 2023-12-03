import React from 'react'

const Atada = () => {
  const phoneNumber = '542804866673'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, estoy interesado en tus servicios.';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  return (
    <div className='Contenedor-img'>
        <div className='text-atada'>
            <h3>Te quedaron dudas?</h3>
            <p>Mandanos un mensaje y te respondemos lo antes posible</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className='btn-atada btn btn-dark'>Charlar</button>
              </a>
        </div>
    </div>
  )
}

export default Atada