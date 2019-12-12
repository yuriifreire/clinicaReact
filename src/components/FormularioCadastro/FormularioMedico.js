import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

class CadastraMedico extends Component {

    constructor(props){
        super(props);
        this.inicia = {
            "nome": "",
            "espec": "",
            "crm": ""};
        this.state = this.inicia;
        this.state = {
            medico: []
        }
    }
    cadastrar =  (event) => {
        
        event.preventDefault();
        axios.post("http://localhost:4000/medico", this.state)
        .then(data => {
            console.log("Medico cadastrado com sucesso",data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    //realizar alteração do estado
    insereFormulario = (event)=>{
        let {name, value} = event.target;
        this.setState({[name]:value})
    };


    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome do Medico</Form.Label>
                            <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.insereFormulario} placeholder="Informe o nome do medico" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEspec">
                            <Form.Label>Especialidade</Form.Label>
                            <Form.Control type="text" name="espec" value={this.state.espec} onChange={this.insereFormulario} placeholder="Informe a especialiade" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridCrm">
                        <Form.Label>CRM</Form.Label>
                        <Form.Control type="text" name="crm" value={this.state.crm} onChange={this.insereFormulario} placeholder="Informe o CRM" />
                    </Form.Group>

                    <Button variant="success" type="submit" onClick={this.cadastrar} >Cadastra</Button>
                </Form>
            </div>
        )
    }
}

export default CadastraMedico;