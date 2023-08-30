import axios from 'axios';
import { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setToken, setUser } = useContext(AuthContext);

  const handleLogIn = async (e) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, { email, password }, { withCredentials: true });
      if (res.data.ok) {
        setUser(res.data.userId);
        navigate('/products');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1 className='d-6 font-weight-normal'>Login</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='font-weight-light'>
            Email address or <Link to='/Signup'>Signup</Link>
          </Form.Label>
          <div className='inputData'>
            <Form.Control type='email' placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} value={email} />
          </div>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='font-weight-light'>Password</Form.Label>
          <div className='inputData'>
            <Form.Control type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} value={password} />
          </div>
        </Form.Group>
        <div className='d-flex flex-row-reverse test'>
          <Button variant='primary' type='button' onClick={handleLogIn}>
            Log In
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
