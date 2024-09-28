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
    <center>
    <Col style={{width: "21rem"}}>
    <div>
      <h1>Inicio de sesión</h1>
      <Col>
      <Form onSubmit={clickSubmit}>
        <Form.Group className="mb-6" controlId="formBasicUsername">
          <Form.Label><b>Usuario</b></Form.Label>
          <Form.Control
            style={{backgroundColor:"lightgrey"}}
            type="username"
            placeholder="Username"
            onChange={handleUserChange}
            value={formValues.login}
          />
          { }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{textAlign:"left"}}><b>Password</b></Form.Label>
          <Form.Control
            style={{backgroundColor:"lightgrey"}}
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
          <Button style={{backgroundColor:"blue"}} variant="primary" type="submit" onClick={clickSubmit}>
            <b>Ingresar</b>
          </Button>
        </Col>
        <Col>
          <Button style={{backgroundColor:"red"}} variant="secondary" type="cancel">
            <b>Cancelar</b>
          </Button>
        </Col>
        </Row>
        
        
      </Form>
      </Col>
    </div>
    </Col>
    </center>
  );
}

export default Login;