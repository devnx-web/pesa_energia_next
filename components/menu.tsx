import { slide as Menu } from 'react-burger-menu'
import React from "react";

const MenuSite = () => {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">O Grupo</a>
                <a id="about" className="menu-item" href="/about">Geradores</a>
                <a id="about" className="menu-item" href="/about">Mais Opções</a>
                <button className="button">Contato</button>
            </Menu>
        );
}

export default MenuSite