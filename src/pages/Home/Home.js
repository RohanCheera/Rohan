import React from 'react'
import './home.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import About from '../About/About.js'
import Contact from '../Contact/Contact.js'
import 'bootstrap/dist/css/bootstrap.css'
import {HiOutlineMail} from "react-icons/hi"
import {FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ProjectsDemo from '../../components/ProjectsDemo/ProjectsDemo'

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
      <div className='home-body container-flex'>
    <div className='home-main '>
      <div className='home-content '>
      <div className='home__img ' ></div>
        <div className='text-con'>
          <p className='iam'>
            I'm
          </p>
          <h1 >
            Ro<span className='sp-title'>han</span>
          </h1>
          <p>
          I empower companies through data-driven excellence as a passionate Data Enthusiast.
          </p>
          
          <div className='hm-btns'>
          <button className='hm-btn'>Download CV </button>
          <button onClick={handleShow} className='hm-btn'> Contact Me</button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Grab a coffee, dive into my portfolio </Modal.Title>
        </Modal.Header>
        <Modal.Title style={{textAlign:"center"}}>let's connect! </Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name "
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
          </div>


        </div>
        
      </div>
      
    </div>
    <div className='social-media-icons '>
      <div className='sm-icon email'>
        <Link to="mailto:cheerarohan@gmail.com" className='email-link'>
        <HiOutlineMail size={25}/>
        </Link>
        </div>
      <div className='sm-icon linkedin'>
        <Link to='https://www.linkedin.com/in/rohan-cheera/' className='linkedin-link'>
        <FaLinkedin size={25}/>
        </Link>
        </div>
      <div className='sm-icon twitter'>
      <Link to='https://twitter.com/Rohan_Cheera' className='twitter-link'><FaTwitter size={25}/></Link></div>
      <div className='sm-icon insta' >
      <Link to='https://www.instagram.com/rohan_cheera/' className='insta-link'><FaInstagram size={25}/></Link></div>
    </div>
    </div>
      <About/>
      <ProjectsDemo/>
      <Contact/>
    </>
  )
}

export default Home