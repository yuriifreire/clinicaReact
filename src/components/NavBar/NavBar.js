import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="light">
                <Navbar.Brand href="#home">NavBar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/" className="">Inicio</Link></Nav.Link>
                    <NavDropdown title="Pacientes" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/cadastraPaciente'>Cadastrar Paciente</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/buscarPaciente'>Buscar Paciente</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Medicos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/cadastraMedico'>Cadastrar Medicos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/buscarMedico'>Buscar Medico</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/tabelaMedico'>Tabela de Medicos</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Quartos" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/cadastraQuarto'>Cadastrar Quarto</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to='/buscarQuarto'>Buscar Quarto</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;