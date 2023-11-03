import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../assets/card1.jpg'

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
          src={card1}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Diseños Exclusivos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={card1}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={card1}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="custom-card" style={{ width: '17rem' }}>
      <div className="custom-card-img-container">
        <Card.Img
          variant="top"
          src={card1}
          className="custom-card-img"
        />
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
        </div>
    </div>
  )
}

export default SeccionImagenes