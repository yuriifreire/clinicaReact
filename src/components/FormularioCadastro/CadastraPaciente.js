import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Col} from 'react-bootstrap';

class CadastraPaciente extends Component {

    constructor(props){
        super(props);
        this.inicia = {
            "nome": "",
            "idade": "",
            "sexo": ""
        };
        this.state = this.inicia;
    }

    insereFormulario = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]:value });
    };

    cadastrarPaciente = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/paciente". this.state)
            .then(data => {
                console.log("Paciente cadastrado com sucesso: ", data);
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
                            <Form.Label>Nome do Paciente</Form.Label>
                            <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.insereFormulario} placeholder="Insira o nome do paciente" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridIdade">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control type="text" name="idade" value={this.state.idade} onChange={this.insereFormulario} placeholder="Insira a idade aqui" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Control type="text" name="sexo" value={this.state.sexo} onChange={this.insereFormulario} placeholder="Informe o sexo. M para Masculino e F para feminino" />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={this.cadastrarPaciente} variant="success" type="submit">Cadastrar Paciente</Button>
                </Form>
            </div>
        );
    };
}

export default CadastraPaciente;