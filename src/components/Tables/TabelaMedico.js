import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class TabelaMedico extends Component{
    constructor(props) {
        super(props);
        this.state = this.medico
        this.state = {
            medico: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/medicos`)
            .then(res => {
                const medico = res.data;
                console.log(res.data);
                this.setState({ medico })
            })
    }

    render() {

        return (
            <Table table-dark>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Especialidade</th>
                        <th>CRM</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.medico.map(medico =>
                    <tr>
                            <td>{medico.nome}</td>
                            <td>{medico.espec}</td>
                            <td>{medico.crm}</td>
                    </tr>)}
                </tbody>
            </Table>
        )
    }
}

export default TabelaMedico;