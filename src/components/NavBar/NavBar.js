import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class NavBar extends Component {

    render() {
        return (
            <>
                <Navbar bg="light" variant="primary">
                    <Navbar.Brand href="#home">Clinica IFRN</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/" className="">Inicio</Link></Nav.Link>
                        <NavDropdown title="Pacientes" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to='/cadastroPaciente'>Cadastrar Pacientes</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/buscarPaciente'>Buscar Pacientes</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Quartos">
                            <NavDropdown.Item><Link to='/cadastroQuartos'>Cadastrar Quartos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/buscarQuartos'>Buscar Quartos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Medicos">
                            <NavDropdown.Item><Link to="/cadastraMedicos" className="">Cadastrar Medicos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/buscarMedicos" className="">Buscar Medicos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/tabelaMedicos" className="">Tabela Medicos</Link></NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="/login">Encerrar sessão</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>

                </Navbar>
            </>
        )
    }
}

export default NavBar;