import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [formValues, setFormValues] = useState({ login: "", password: "", favClass: "1" });
  const [userValid, setUserValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true); 
  const [submitClicked, setSubmitClicked] = useState(false);
  
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/;
    return password.length >= 9 && passwordRegex.test(password);
  };

  const clickSubmit = (e) => {
    e.preventDefault(); 
    setSubmitClicked(true); 
  };

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });
    setPasswordValid(validatePassword(newPassword)); 
  };

  return (
    <div>
      <h1>Inicio de Sesion</h1>

      <Form onSubmit={clickSubmit}>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="login"
            placeholder="Enter Username"
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
            isInvalid={!passwordValid} // Valida en tiempo real la contraseña
          />
          { }
        </Form.Group>

        <Button variant="primary" type="submit" onClick={clickSubmit}>
          Submit
        </Button>
        
        <Button variant="secondary" type="cancel">
          Cancelar
        </Button>

      </Form>
    </div>
  );
}

export default Login;