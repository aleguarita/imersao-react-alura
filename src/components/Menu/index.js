import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import Logo from '../../assets/img/logo.png'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Aluraflix" title="Logo da Aluraflix" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;