import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

class BuscarMedico extends Component {

    constructor(props) {
        super(props);
        this.inicia = { "crm": "" };
        this.state = this.inicia;
        this.state = {
            medicos: []
        }
    }

    buscarMedico = (event) => {
        event.preventDefault();
        axios.get("http://localhost:3000/medico" + this.state.crm)
            .then(data => {
                console.log("Medico encontrado: ", data);
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
                            <th>Nome do Medico</th>
                            <th>Especialidade</th>
                            <th>CRM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td>Cardio</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td>Trauma</td>
                            <td>4321</td>
                        </tr>
                    </tbody>
                </Table>
    }

    let medicos = 
        <div className="container">
            <Form>
                <Form.Row>
                    <Form.Group controlId="formGridCrm">
                        <Form.Label>Informe o CRM do medico para buscar:</Form.Label>
                        <Form.Control type="text" name="crm" value={this.state.crm} onChange={this.insereFormulario} placeholder="Informe o CRM aqui" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">Buscar Medico</Button>
            </Form>
            <div>
                {fim}
            </div>
        </div>;

        return medicos;
    };
}


export default BuscarMedico;