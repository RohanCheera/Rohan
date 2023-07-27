import React from 'react'
import './navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar key='lg' expand='lg' className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Rohan Cheera</Navbar.Brand>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
          <Navbar.Offcanvas
            id={'offcanvasNavbar-expand-lg'}
            aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="work">Projects</Nav.Link>
                {/* <Nav.Link href="contact">Contact Me</Nav.Link> */}
                <Button variant="primary" onClick={handleShow}>
                  contact me!!
                </Button>
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
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )
}

export default Navigation