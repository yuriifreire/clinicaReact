import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import TabelaMedico from "./components/Tables/TabelaMedico";
import CadastraMedico from "./components/FomularioCadastro/FormularioMedico";
import BuscarMedico from "./components/FomularioBusca/BuscarMedico";

import TabelaPaciente from "./components/Tables/TabelaPaciente";
import CadastraPaciente from "./components/FomularioCadastro/FormularioPaciente";
import AtualizarPaciente from "./components/AtualizarFormulario/AtualizarPaciente";
import BuscarPaciente from "./components/FormularioBusca/BuscarPaciente";

import CadastraQuarto from "./components/FomularioCadastro/FormularioQuarto";
import AtualizarQuarto from "./components/AtualizarFormulario/AtualizarQuarto";
import BuscarQuarto from "./components/FormularioBusca/BuscarQuarto";

import NavBar from "./components/NavBar/NavBar";


const Routes = () => { 
    return (
        <BrowserRouter>
            <Switch>

            <Route exact path="/tabelaMedico">
                <NavBar />
                <TabelaMedico />
            </Route>
            
            <Route exact path="/">
                <NavBar />
                <TabelaPaciente />
            </Route>

            <Route exact path="/cadastraPaciente">
                <NavBar />
                <CadastraPaciente />
            </Route>

            <Route exact path="/atualizarPaciente">
                <NavBar />
                <AtualizarPaciente />
            </Route>

            <Route exact path="/buscarPaciente">
                <NavBar />
                <BuscarPaciente />
            </Route>

            <Route exact path="/cadastraQuarto">
                <NavBar />
                <CadastraQuarto />
            </Route>

            <Route exact path="/atualizarQuarto">
                <NavBar />
                <AtualizarQuarto />
            </Route>

            <Route exact path="/buscarQuarto">
                <NavBar />
                <BuscarQuarto />
            </Route>

            <Route exact path="/cadastraMedico">
                <NavBar />
                <CadastraMedico />
            </Route>

            <Route exact path="/buscarMedico">
                <NavBar />
                <BuscarMedico />
            </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;