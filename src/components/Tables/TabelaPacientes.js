import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class TabelaPacientes extends Component {

    constructor(props) {
        super(props);
        this.pacientes = {"nome":" "}
        this.state = this.pacientes
        this.state = {
            pacientes: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/pacientes`)
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
                {this.state.pacientes.map(pacientes =>
                    <tr>
                            <td>{pacientes.nome}</td>
                            <td>{pacientes.idade}</td>
                            <td>{pacientes.sexo}</td>
                    </tr>)}
                </tbody>
            </Table>
        )
    }
}

export default TabelaPacientes;