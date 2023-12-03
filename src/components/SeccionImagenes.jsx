import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mariposin from '../assets/mariposin.jpeg' 
import cuidado from '../assets/rusin.jpeg' 
import rusaa from '../assets/rusa.jpeg'

const SeccionImagenes = () => {
  return (
    <div className='contenedor'>
        <div className='texto'>
            <h2 className='text-center tx-title'>BRINDAMOS EXELENTES SERVICIOS</h2>
        </div>
        <div className='servicios d-flex justify-content-center'>
        <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={mariposin}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Diseños Exclusivos</Card.Title>
        <Card.Text>
        Nuestra dedicación a la exclusividad se refleja en cada detalle. Te garantizamos diseños hermosos.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={rusaa}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Manicuria Rusa</Card.Title>
        <Card.Text>
        se realiza con torno y consigue una limpieza profunda de la uña quitando totalmente la cutícula
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={cuidado}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Cuidado De Las Uñas</Card.Title>
        <Card.Text>
        Se promueve el cuidado de la uña natural de las clientas, utilizando las herramientas menos abrasivas
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default SeccionImagenes