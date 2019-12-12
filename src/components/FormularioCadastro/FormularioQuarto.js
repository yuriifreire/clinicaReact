import React, { Component } from "react";
import axios from 'axios'
import { Form, Button, Col } from 'react-bootstrap';



class CadastraQuarto extends Component {

    constructor(props){
        super(props);
        this.inicio = {
            "numero ": "",
            "andar": "",
            "corredor": ""};
        this.state = this.inicio;
    }

    //realizar alteração do estado
    insereFormulario = (event)=>{
        let {name, value} = event.target;
        this.setState({[name]:value})
        console.log(this.state);
    };

    cadastrar() {
        axios.post("http://localhost:4000/quarto", this.state)
        .then(data => {
            console.log("Quarto cadastrado com sucesso",data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (

            <div className="container">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNumero">
                                <Form.Label>Numero do Quarto</Form.Label>
                                <Form.Control type="text" name="numero" value={this.state.numero} onChange={this.insereFormulario} placeholder="Informe o numero do quarto" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAndar">
                                <Form.Label >Andar</Form.Label>
                                <Form.Control type="text" name="andar" value={this.state.andar} onChange={this.insereFormulario} placeholder="Informe o andar" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCorredor">
                                <Form.Label>Corredor</Form.Label>
                                <Form.Control type="text" name="corredor" value={this.state.corredor} onChange={this.insereFormulario} placeholder="Informe o corredor" />
                            </Form.Group>
                        </Form.Row>


                        <Button variant="success" type="submit">Cadastra</Button>
                    </Form>
            </div>
        );
    };
}

export default CadastraQuarto;