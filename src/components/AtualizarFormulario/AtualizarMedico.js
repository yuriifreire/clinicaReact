import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class AtualizarMedico extends Component {
    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome do Medico</Form.Label>
                            <Form.Control type="text" placeholder="Insira o nome aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEspec">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control type="text" placeholder="Informe a especialidade aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCrm">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Control type="text" placeholder="Digite o CRM aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="success" type="submit">Atualizar Medico</Button>
                </Form>
            </div>
        );
    };
}

export default AtualizarMedico;