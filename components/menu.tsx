import { slide as Menu } from 'react-burger-menu'
import React from "react";
import Link from "next/link"

const MenuSite = () => {
        return (
            <Menu>
                <Link href="/"><a id="home" className="menu-item">Home</a></Link>
                <Link href="#"><a id="about" className="menu-item">O Grupo</a></Link>
                <Link href="/about"><a id="about" className="menu-item">Geradores</a></Link>
                <Link href="/about"><a id="about" className="menu-item">Mais Opções</a></Link>
                <button className="button">Contato</button>
            </Menu>
        );
}

export default MenuSite