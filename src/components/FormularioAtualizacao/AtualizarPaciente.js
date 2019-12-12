import React, { Component } from "react";
import { Form, Button, Col } from 'react-bootstrap';

class AtualizarPaciente extends Component{
    render() {
        return (
            <div className="container">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome do Paciente</Form.Label>
                        <Form.Control type="text" placeholder="Informe o nome do paciente" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridIdade">
                        <Form.Label >Idade</Form.Label>
                        <Form.Control type="text" placeholder="Informe a idade" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="formGridSexo">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control type="text" placeholder="Informe o sexo" />
                    </Form.Group>
                </Form.Row>

                <Button variant="outline-primary" type="submit">Atualizar</Button>
            </Form>
            </div>
        );
    };
}

export default AtualizarPaciente;