import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingNavbar from './LandingNavbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const LandingPage = () => {
  let navigate = useNavigate()
  let [cred, setCred] = useState()
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now().toString()
  })
  let { username, password, id } = state
  useEffect(() => {
    axios.get(`http://localhost:3000/credentials`).then((resp) => { setCred(resp.data) })
  }, [])
  setTimeout(() => {
    console.log(cred)
  }, 3000)
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  let handleLogin = () => {
    console.log("checking...")
    cred.length == 0 && alert("no data found")
    cred.length > 0 && cred.map((obj, i) => {
      if (obj.username == state.username && obj.password == state.password) {
        navigate("/home")
      }
    })
    if (obj.username == state.username && obj.password == state.password) {
      alert("Welcome user")

    }

  }
  return (
    <div>
      <LandingNavbar />

      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name='username' value={username} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" name='password' value={password} onChange={handleChange} />
          </Form.Group>
        </Form>
        <Button onClick={handleLogin} variant="secondary">Sign In</Button>
      </div>
    </div>
  )
}

export default LandingPage