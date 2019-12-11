import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class AtualizarQuarto extends Component {
    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNum">
                            <Form.Label>Numero do Quarto</Form.Label>
                            <Form.Control type="text" placeholder="Insira o numero aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAndar">
                            <Form.Label>Andar</Form.Label>
                            <Form.Control type="text" placeholder="Informe o andar aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCorredor">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Control type="text" placeholder="Informe o corredor aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="success" type="submit">Atualizar Quarto</Button>
                </Form>
            </div>
        );
    };
}

export default AtualizarQuarto;