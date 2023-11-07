import React from 'react'
import carito from '../assets/carito.jpg'
import Card from 'react-bootstrap/Card';

const PageNosotros = () => {
  return (
    <div className='contenedor-nosotros'>
        <div className='intro-nosotros d-flex'>
            <img src={carito} alt="" />
            <div className='text-nosotros'>
                <h2>Bonita Nails</h2>
                <p> Hola, soy Carito, la mente y las manos detrás de Bonita Nails. Me enorgullece ofrecer un servicio de manicura de alta calidad, donde la atención personalizada se combina con la pasión por realzar la belleza de tus manos y uñas.</p>
            </div>
        </div>
        <div className='contenedor-card d-flex'>
        <Card className="card-nosotros" style={{ width: '18rem' }}>
            <Card.Body className='body'>
                <Card.Title className='title'>EXPERIENCIA</Card.Title>
                <Card.Text className='texto'>
                Estoy constantemente actualizada con las últimas tendencias, técnicas y productos para asegurarme de que tu experiencia en Bonita Nails sea única y satisfactoria.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-nosotros" style={{ width: '18rem' }}>
            <Card.Body className='body'>
                <Card.Title className='title'>VALORES</Card.Title>
                <Card.Text className='texto'>
                En Bonita Nails tu comodidad y satisfacción son mi máxima prioridad, y me enorgullezco de ofrecer un servicio personalizado que se adapte a tus gustos y preferencias individuales.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-nosotros" style={{ width: '18rem' }}>
            <Card.Body className='body'>
                <Card.Title className='title'>PROMESA</Card.Title>
                <Card.Text className='texto'>
                De mí, puedes esperar una experiencia altamente personalizada que convierte tus uñas en auténticas obras maestras. Estoy comprometida en brindarte un servicio excepcional y único.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-nosotros" style={{ width: '18rem' }}>
            <Card.Body className='body'>
                <Card.Title className='title'>VISITANOS</Card.Title>
                <Card.Text className='texto'>
                Te invito a visitarme en Puerto Madryn para experimentar la magia de Bonita Nails. Espero ansiosamente atenderte, ayudarte a sentirte hermosa y que te vayas con muy contenta.
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default PageNosotros