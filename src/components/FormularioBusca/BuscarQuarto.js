import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

class BuscarQuarto extends Component {

    constructor(props) {
        super(props);
        this.inicia = { "num": "" };
        this.state = this.inicia;
    }

    buscarQuarto = (event) => {
        event.preventDefault();
        axios.get("http://localhost:3000/quarto" + this.state.num)
            .then(data => {
                console.log("Quarto encontrado: ", data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    insereFormulario = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value})
    };

    render(){  
        let fim;
        if(1) {
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
                            <td>02</td>
                            <td>02</td>
                        </tr>
                    </tbody>
                </Table>
    }

    let quartos = 
        <div className="container">
            <Form>
                <Form.Row>
                    <Form.Group controlId="formGridNum">
                        <Form.Label>Informe o numero do quarto para buscar:</Form.Label>
                        <Form.Control type="text" name="num" value={this.state.num} onChange={this.insereFormulario} placeholder="Informe o numero aqui" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">Buscar Quarto</Button>
            </Form>
            <div>
                {fim}
            </div>
        </div>;

        return quartos;
    };
}


export default BuscarQuarto;