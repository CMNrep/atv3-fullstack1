import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import NavBar from '../Nav';  // Supondo que o componente NavBar esteja no mesmo diretório

export default function CardsAtalho() {
    return (
        <>
            <NavBar Title="ATALHOS"/>
            <div className="cards">
                <div className="card">
                    <Link to="/campanha">
                        <h3>Cadastrar Campanha</h3>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/CadAssociados">
                        <h3>Cadastrar Associado</h3>
                    </Link>
                </div>

                <div className="card">
                    <h3>Cadastrar Doação</h3>
                </div>

                <div className="card">
                    <Link to="/campanhas">
                        <h3>Campanhas Cadastradas</h3>
                    </Link>
                </div>

                <div className="card">
                    <Link to="/ListarAssociados">
                        <h3>Consultar Associados</h3>
                    </Link>
                </div>

                <div className="card">
                    <h3>Cadastrar Doação</h3>
                </div>

                <div className="card">
                    <h3>Cadastrar Produtos</h3>
                </div>
            </div>
        </>
    );
}
