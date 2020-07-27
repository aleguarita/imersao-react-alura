import React from 'react'
import './menu.css'
import Logo from '../../assets/img/logo.png'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Aluraflix" title="Logo da Aluraflix" />
            </a>

            <Button href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;