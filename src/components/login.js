import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [formValues, setFormValues] = useState({ login: "", password: "", favClass: "1" });
  const [formValid, setFormValid] = useState(true);
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault(); 
    
    fetch('http://localhost:3001/login',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ 
        login: formValues.login, 
        password: formValues.password 
      })
      }).then((response) => {
        console.log(response);
        if(!response.ok) {
          setFormValid(false);
        } else {
          navigate('/robots')
        }
    });
  };

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, login: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value});
  };

  return (
    <div>
      <h1>Inicio de Sesion</h1>
      <Col>
      <Form onSubmit={clickSubmit}>
        <Form.Group className="mb-6" controlId="formBasicUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            onChange={handleUserChange}
            value={formValues.login}
          />
          { }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
          />
          { }
        </Form.Group>

        { !formValid && (
            <Form.Text className="text-danger">
                  Error de autenticación, revise sus credenciales.
            </Form.Text>
        )}
        <Row>
        <Col>
          <Button variant="primary" type="submit" onClick={clickSubmit}>
            Ingresar
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" type="cancel">
            Cancelar
          </Button>
        </Col>
        </Row>
        
        
      </Form>
      </Col>
    </div>
  );
}

export default Login;