import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap'


class BuscarQuarto extends Component {

    constructor(props) {
        super(props);
        this.inicia = { "numero": "" };
        this.state = this.inicia;
    }

    insereFormulario = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        let fim;
        if (1) {
            fim =

                <Table table-dark>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Numero do Quarto</th>
                            <th>Andar</th>
                            <th>Corredor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>01</td>
                            <td>01</td>
                            <td>01</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>02</td>
                            <td>01</td>
                            <td>01</td>
                        </tr>
                    </tbody>
                </Table>
        }

        let quarto =
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formGridNumero">
                            <Form.Label>Digite o numero do quarto para buscar</Form.Label>
                            <Form.Control type="text" name="numero" value={this.state.numero} onChange={this.insereFormulario} placeholder="Informe o numero do quarto" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="info" type="submit">Buscar</Button>

                </Form>
                <br></br>
                <div>
                    {fim}
                </div>
            </div>;

        return quarto;

    }
};

export default BuscarQuarto;