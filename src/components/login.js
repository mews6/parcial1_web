import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [formValues, setFormValues] = useState({ login: "", password: "", favClass: "1" });
  const [formValid, setFormValid] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  const clickSubmit = (e) => {
    e.preventDefault(); 
    
    const post = fetch('http://localhost:3001/login', {
      method: 'POST',
      body: ({ 
        login: formValues.login, 
        password: formValues.password 
      })
    });


    console.log(post);

    setSubmitClicked(true); 
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

        <Button variant="primary" type="submit" onClick={clickSubmit}>
          Submit
        </Button>
        
        <Button variant="secondary" type="cancel">
          Cancelar
        </Button>

        { !formValid && (
            <Form.Text className="text-danger">
                  Error de autenticación, revise sus credenciales.
            </Form.Text>
        )}
      </Form>
    </div>
  );
}

export default Login;