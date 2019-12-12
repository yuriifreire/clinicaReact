import React, { Component } from "react";
import { Button, FormGroup, Form } from "react-bootstrap";
import { Redirect } from 'react-router'
import "./Login.css";

class Login extends Component {

    constructor(props) {
        super(props);
        this.inicia = { "usuario": "", "senha": "" };
        this.state = this.inicia;
    };

    onLogin = () => {
        this.setState({
            redirect: true
        })
    }

    validateForm = () => {
        return this.state.usuario > 0 && this.state.senha > 0;
    };

    insereFormulario = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        if (this.setState.redirect) {
            return <Redirect to="/tabelaPacientes" />
        }
        else {
            return (
                <div className="Login">
                    <form>
                        <FormGroup controlId="usuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control autoFocus type="text" name="usuario" value={this.state.usuario} onChange={this.insereFormulario} placeholder="Insira o usuario"  />
                        </FormGroup>
                        <FormGroup controlId="senha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" name="senha" value={this.state.senha} onChange={this.escritaFormulario} placeholder="Insira a senha" />
                        </FormGroup>
                        <Button variant="dark" disabled={!this.validateForm()} onClick={this.onLogin} type="submit">Login</Button>
                    </form>
                </div>
            );
        }
    }
}

export default Login;
