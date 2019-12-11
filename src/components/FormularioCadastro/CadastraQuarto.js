import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Col} from 'react-bootstrap';

class CadastraQuarto extends Component {

    constructor(props){
        super(props);
        this.inicia = {
            "num": "",
            "andar": "",
            "corredor": ""
        };
        this.state = this.inicia;
    }

    insereFormulario = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]:value });
    };

    cadastrarQuarto = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/quarto". this.state)
            .then(data => {
                console.log("Quarto cadastrado com sucesso: ", data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNum">
                            <Form.Label>Numero do Quarto</Form.Label>
                            <Form.Control type="text" name="num" value={this.state.num} onChange={this.insereFormulario} placeholder="Insira o numero do quarto" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAndar">
                            <Form.Label>Andar</Form.Label>
                            <Form.Control type="text" name="andar" value={this.state.andar} onChange={this.insereFormulario} placeholder="Insira o andar do quarto" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCorredor">
                            <Form.Label>Corredor</Form.Label>
                            <Form.Control type="text" name="corredor" value={this.state.corredor} onChange={this.insereFormulario} placeholder="Informe o corredor" />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={this.cadastrarQuarto} variant="success" type="submit">Cadastrar Quarto</Button>
                </Form>
            </div>
        );
    };
}

export default CadastraQuarto;