import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, FloatingLabel } from "react-bootstrap";
import "../CSS/LoginPage.css";
import "../CSS/LoginRegisterCards.css";
import logo from "../images/logo_pregrado.png";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="loginContent">
      <Card className="custom-card">
        <Card.Img variant="top" src={logo} className="logo" />
        <h1 className="mt-4 mb-5">¡Bienvenido a Pasantías Webcursos UAI!</h1>
        <Form>
          <FloatingLabel controlId="floatingInputGrid" label="Correo electrónico" className="mb-3 customFloatingLabel" id="">
            <Form.Control type="email" placeholder="" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPasswordGrid" label="Contraseña" className="mb-3 customFloatingLabel" id="">
            <Form.Control type="password" placeholder="" />
          </FloatingLabel>
          <Button type="submit" onClick={() => navigate("/home")} className="mt-1 mb-3" id="btn-login">Iniciar sesión</Button>
        </Form>
        <a href="/register" className="register-link">¿No tienes cuenta? Regístrate aquí</a>
      </Card>
    </Container>
  );
}

export default LoginPage;