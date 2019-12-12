import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';


class BuscarPaciente extends Component {

    constructor(props) {
        super(props);
        this.inicia = { "nome": "" };
        this.state = this.inicia;
        this.state = {
            pacientes: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/paciente`)
            .then(res =>
                res.json())
            .then((data) => {
                this.setState({ pacientes: data })
            })

    }

    insereFormulario = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value })
    };

    buscarPaciente = (event) => {
        event.preventDefault();
        axios.get("http://localhost:4000/paciente/" + this.state.nome)
            .then(data => {
                console.log("Paciente encontrado com sucesso", data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formGridNome">
                            <Form.Label>Digite o nome para buscar o paciente</Form.Label>
                            <Form.Control type="text" name="nome" value={this.state.nome} onChange={this.insereFormulario} placeholder="Informe o nome" />
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={this.buscarLivro} variant="info" type="submit">Buscar</Button>
                </Form>

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
            </div>
        )
    };
}
export default BuscarPaciente;