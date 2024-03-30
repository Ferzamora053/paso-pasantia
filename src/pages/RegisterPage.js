import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import "../CSS/RegisterPage.css";
import "../CSS/LoginRegisterCards.css";


const RegisterPage = () => {
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    return (
        <div className='registerContainer'>
            <Container className="registerContent">
                <Card className="custom-card">
                    <h1 className="mb-3">¡Registra tu usuario!</h1>
                    <Form>
                        <fieldset>
                            <legend className='mb-3'>Selecciona tu tipo de usuario</legend>
                            <UserTypeSelector userType={userType} setUserType={setUserType} />
                            <RenderFields userType={userType} setUserType={setUserType} />
                        </fieldset>
                        <Button type="submit" onClick={() => navigate("/home")} className="mt-3 mb-3" id="btn-register">Registrarse</Button>
                    </Form>
                    <a href="/login" className="register-link">¿Ya tienes cuenta? Inicia sesión aquí</a>
                </Card>
            </Container>
        </div>
    );
};

const UserTypeSelector = ({ userType, setUserType }) => {
    const handleChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <Form.Select id="userType" name='userType' value={userType} onChange={handleChange} className="mb-3">
            <option value="">Selecciona un tipo de usuario</option>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="carrerDirector">Director de Carrera</option>
            <option value="internshipAdmin">Administrador de Pasantías</option>
        </Form.Select>
    );
};

const RenderFields = ({ userType, setUserType }) => {
    const commonFields = (
        <>
        <Row>
            <Col md-6>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="Nombre" />
                </FloatingLabel>
            </Col>
            <Col md-6>
                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
            </Col>   
        </Row>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 customFloatingLabel">
            <Form.Control type="email" placeholder="" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3 customFloatingLabel">
            <Form.Control type="password" placeholder="" />
        </FloatingLabel>
        <FloatingLabel controlId='floatingInput' label="Phone Number" className="mb-3 customFloatingLabel">
            <Form.Control type="text" placeholder="" />
        </FloatingLabel>
        </>
    );

    switch (userType) {
        case 'student':
            return (
                <>
                {commonFields}
                <FloatingLabel controlId="floatingInput" label="Career" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Admission Year" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                </>
            );
        case 'teacher':
        case 'carrerDirector':
            return (
                <>
                {commonFields}
                <FloatingLabel controlId="floatingInput" label="Department" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Faculty" className="mb-3 customFloatingLabel">
                    <Form.Control type="text" placeholder="" />
                </FloatingLabel>
                </>
            );
        case 'internshipAdmin':
            return (
                <>
                {commonFields}
                </>
            );
        default:
            return null;
    }
};

export default RegisterPage;
