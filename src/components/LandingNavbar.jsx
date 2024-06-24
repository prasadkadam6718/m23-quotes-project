import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
function LandingNavbar() {

  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now().toString()
  })
  let { username, password, id } = state
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  let handleSignup = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3000/credentials`, state)
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Welcome Back User, please signup first</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter new username</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name='username' required value={username} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Enter new password</Form.Label>
                    <Form.Control type="text" placeholder="Password" name='password' value={password} required onChange={handleChange} />
                  </Form.Group>
                </Form>
                <Button onClick={handleSignup} variant="secondary">Signup</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default LandingNavbar;