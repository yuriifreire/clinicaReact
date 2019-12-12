import React, { Component } from "react";
import { Form, Button, Col } from 'react-bootstrap';

class AtualizarQuarto extends Component{
    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNumero">
                            <Form.Label>Numero do quarto</Form.Label>
                            <Form.Control type="text" placeholder="Informe o numero do quarto" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAndar">
                            <Form.Label >Andar</Form.Label>
                            <Form.Control type="text" placeholder="Informe o andar" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formGridCorredor">
                            <Form.Label>Corredor</Form.Label>
                            <Form.Control type="text" placeholder="Informe o corredor"/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="outline-primary" type="submit">Atualizar</Button>
                </Form>
            </div>
        );
    };
}
export default AtualizarQuarto;