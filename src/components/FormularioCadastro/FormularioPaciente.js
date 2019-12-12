import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col } from 'react-bootstrap';


class CadastraPaciente extends Component {

    constructor(props){
        super(props);
        this.inicia = {
            "nome": "",
            "idade": "",
            "sexo": ""};
        this.state = this.inicia;
    }

    //realizar alteração do estado
    insereFormulario = (event)=>{
        let {name, value} = event.target;
        this.setState({[name]:value});
    };


    cadastrar =  (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/pacientes", this.state)
        .then(data => {
            console.log("Paciente cadastrado com sucesso",data);
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
                        <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.insereFormulario} placeholder="Informe o nome do paciente" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridIdade">
                        <Form.Label >Idade</Form.Label>
                        <Form.Control type="text" name="idade" value={this.state.idade} onChange={this.insereFormulario} placeholder="Informe a idade" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="formGridSexo">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control type="text" name="sexo" value={this.state.sexo} onChange={this.insereFormulario} placeholder="M > homem, F > mulher" />
                    </Form.Group>
                </Form.Row>

                <Button onClick={this.cadastrar} variant="success" type="submit">Cadastrar</Button>
            </Form>
        </div>
        );
    };


}
export default CadastraPaciente;