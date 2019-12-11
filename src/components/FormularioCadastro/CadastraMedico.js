import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Col} from 'react-bootstrap';

class CadastraMedico extends Component {

    constructor(props){
        super(props);
        this.inicia = {
            "nome": "",
            "espec": "",
            "crm": ""
        };
        this.state = this.inicia;
        this.state = {
            medicos: []
        }
    }

    insereFormulario = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]:value });
    };

    cadastrarMedico = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/medico". this.state)
            .then(data => {
                console.log("Medico cadastrado com sucesso: ", data);
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
                        <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome do Medico</Form.Label>
                            <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.insereFormulario} placeholder="Insira o nome do medico" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEspec">
                            <Form.Label>Especialidade</Form.Label>
                            <Form.Control type="text" name="espec" value={this.state.espec} onChange={this.insereFormulario} placeholder="Insira a especialidade aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCrm">
                            <Form.Label>CRM</Form.Label>
                            <Form.Control type="text" name="crm" value={this.state.crm} onChange={this.insereFormulario} placeholder="Informe o CRM aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={this.cadastrarMedico} variant="success" type="submit">Cadastrar Medico</Button>
                </Form>
            </div>
        );
    };
}

export default CadastraMedico;