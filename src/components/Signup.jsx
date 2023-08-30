import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      rePassword,
    };

    const res = await axios.post('http://localhost:8080/users/signup', newUser);
    
    if (res.data.ok) {
      navigate('/');
    }
  };

  return (
    <Container>
      <h1 className='d-6 font-weight-normal'>Sign-Up</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='font-weight-light'>Name</Form.Label>
          <div className='inputData'>
            <Form.Control type='email' placeholder='User Name' onChange={(event) => setName(event.target.value)} value={name} />
          </div>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='font-weight-light'>Email address</Form.Label>
          <div className='inputData'>
            <Form.Control type='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} value={email} />
          </div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='font-weight-light'>Password</Form.Label>
          <div className='inputData'>
            <Form.Control
              type='password'
              placeholder='Password'
              autoComplete='on'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='font-weight-light'>Repeat Password</Form.Label>
          <div className='inputData'>
            <Form.Control
              type='password'
              placeholder='Repeat Password'
              autoComplete='on'
              value={rePassword}
              onChange={(event) => setRePassword(event.target.value)}
            />
          </div>
        </Form.Group>
        <div className='d-flex flex-row-reverse'>
          <Button variant='primary' type='submit' className='' onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
