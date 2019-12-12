import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

class BucarMedico extends Component{

    constructor(props){
        super(props);
        this.inicia = {"crm": ""};
        this.state = this.inicia;
        this.state = {
            nedico: []
        }
    }


    insereFormulario = (event)=>{
        let {name, value} = event.target;
        this.setState({[name]:value})
    };


    render(){
        let fim;
        if (1){
            fim =  

            <Table table-dark>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Especialidade</th>
                    <th>CRM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Joao</td>
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
    
        let medico = 
        <div className="container">
        <Form>
            <Form.Row>
                <Form.Group controlId="formGridCrm">
                    <Form.Label>Digite o CRM para buscar o Medico</Form.Label>
                    <Form.Control type="text" name="crm" value={this.state.crm} onChange={this.insereFormulario} placeholder="Informe o CRM" />
                </Form.Group>
            </Form.Row>
            <Button variant="info" type="submit">Buscar</Button>
            
        </Form>
        <br></br>
        <div>
        {fim}
        </div>

        </div>;
        
        return medico;

    }
}

export default BucarMedico;
