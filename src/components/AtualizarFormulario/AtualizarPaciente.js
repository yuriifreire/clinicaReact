import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class AtualizarPaciente extends Component {
    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome do Paciente</Form.Label>
                            <Form.Control type="text" placeholder="Insira o nome aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridIdade">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control type="text" placeholder="Informe a idade aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Control type="text" placeholder="Digite M para masculino e F para feminino" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="success" type="submit">Atualizar Paciente</Button>
                </Form>
            </div>
        );
    };
}

export default AtualizarPaciente;