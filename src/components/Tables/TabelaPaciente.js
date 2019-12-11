import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class TabelaPaciente extends Component { 
    constructor(props){
        super(props);
        this.pacientes = {"nome":""};
        this.state = this.pacientes
        this.state = {
            pacientes: []
        }
    }

    componentDidMount() { 
        axios.get(`https://localhost:3000/paciente`)
            .then(res => {
                const pacientes = res.data;
                console.log(res.data);
                this.setState({ pacientes })
            })
    }

    render() {
        return (
            <Table table-dark>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pacientes.map(paciente =>
                        <tr>
                            <td>{paciente.nome}</td>
                            <td>{paciente.idade}</td>
                            <td>{paciente.sexo}</td>
                        </tr>)}
                </tbody>
            </Table>
        )
    }
}

export default TabelaPaciente;