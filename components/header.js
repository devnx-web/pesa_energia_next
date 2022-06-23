import css from "./header.module.css"
import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";
import Link from "next/link";
import Menusite from "../components/menu.tsx"

export default function Header(){
    return(
        <div>
            <Menusite/>
            <div className={css.bgcolor}>
                <Container>
                    <div className="d-flex align-items-center justify-content-between ps-4">
                            <Link href="/"><a><Image src="/img/logo-pesaenergia.jpg" width="120" height="59" alt="logo" /></a></Link>

                            <navbar className={css.menuDesk} style={{alignItems: 'center'}}>
                                <Link href="#"><a className={css.link}><span>Home</span></a></Link>
                                <Link href="#"><a className={css.link}><span>O Grupo</span></a></Link>
                                <Link href="#"><a className={css.link}><span>Geradores</span></a></Link>
                                <Link href="#"><a className={css.link}><span>Mais Opções</span></a></Link>
                                <button className={css.button}>Contato</button>
                            </navbar>
                    </div>
                </Container>
            </div>
        </div>
    )
}