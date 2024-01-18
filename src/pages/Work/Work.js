import React,{useEffect} from 'react'
import { Card } from 'react-bootstrap'
import './work.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset (in px) from the top of the viewport to trigger animations
      easing: 'ease-in-out', // Animation easing
      delay: 200, // Delay (in ms) before animations start
    });

    // Optionally clean up AOS on component unmount
    return () => AOS.refresh();
  }, []);
  return (
    <div className='work'>
      {/* <div data-aos="fade-right">
      <Card className='work-card'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div data-aos="fade-left">
      <Card className='work-card'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div> */}
         <Card className='work-card' data-aos='fade-right'>
            <Card.Img className='workcard-content-left' variant="top" src='https://images.pexels.com/photos/16124552/pexels-photo-16124552/free-photo-of-man-walking-along-running-subway-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>


          <Card className='work-card' data-aos='fade-left'>
            <Card.Img className='workcard-content-left' variant="top" src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>

          <Card className='work-card' data-aos='fade-right'>
            <Card.Img className='workcard-content-left' variant="top" src="https://images.pexels.com/photos/8627841/pexels-photo-8627841.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>

          <Card className='work-card' data-aos='fade-left'>
            <Card.Img className='workcard-content-left' variant="top" src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>

          <Card className='work-card' data-aos='fade-right'>
            <Card.Img className='workcard-content-left' variant="top" src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>

          <Card className='work-card' data-aos='fade-left'>
            <Card.Img className='workcard-content-left' variant="top" src="https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body className='work-card-content'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          </Card>
      </div>
      
      


  )
}

export default Work