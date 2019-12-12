import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Login from "./components/Login/Login";
import TabelaUsuario from "./components/Tables/TabelaMedico";
import CadastraUsuario from "./components/FormularioCadastro/FormularioMedico";
import BucarUsuario from "./components/FormularioBusca/BuscarMedico";

import CadastraLivro from "./components/FormularioCadastro/FormularioPaciente";
import AtualizarLivro from "./components/FormularioAtualizacao/AtualizarPaciente";
import BuscarLivro from './components/FormularioBusca/BuscarPaciente'

import CadastraAutor from "./components/FormularioCadastro/FormularioQuarto";
import AtualizarAutor from "./components/FormularioAtualizacao/AtualizarQuarto";
import BuscarAutor from "./components/FormularioBusca/BuscarQuarto";

import NavBar from "./components/NavBar/NavBar";
import TabelaLivro from "./components/Tables/TabelaPacientes";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

            <Route path="/login">
                <Login />
            </Route>

            <Route exact path="/tabelaMedico">
                    <NavBar />
                    <TabelaUsuario />
                </Route>

                <Route exact path="/">
                    <NavBar />
                    <TabelaLivro />
                </Route>

                <Route exact path="/cadastroPaciente">
                    <NavBar />
                    <CadastraLivro />
                </Route>   

                <Route exact path="/atualizarPaciente">
                    <NavBar />
                    <AtualizarLivro />
                </Route>

                <Route exact path="/buscarPaciente">
                    <NavBar />
                    <BuscarLivro />
                </Route>

                <Route exact path="/cadastroQuarto">
                    <NavBar />
                    <CadastraAutor />
                </Route>

                <Route exact path="/atualizarQuarto">
                    <NavBar />
                    <AtualizarAutor />
                </Route>

                <Route exact path="/buscarQuarto">
                    <NavBar />
                    <BuscarAutor />
                </Route>

                <Route exact path="/cadastraMedico">
                    <NavBar />
                    <CadastraUsuario />
                </Route>

                <Route exact path="/buscarMedico">
                    <NavBar />
                    <BucarUsuario />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;