import css from "./header.module.css"
import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <Row>
                        <Col>
                            <Image src="/img/logo-pesaenergia.jpg" width="120" height="59" alt="logo" />
                        </Col>

                        <Col style={{textAlign: 'right', marginTop: '10px'}}>
                            <navbar style={{alignItems: 'center'}}>
                                <Link href="#"><a className={css.link}><span>Home</span></a></Link>
                                <Link href="#"><a className={css.link}><span>O Grupo</span></a></Link>
                                <Link href="#"><a className={css.link}><span>Geradores</span></a></Link>
                                <Link href="#"><a className={css.link}><span>Mais Opções</span></a></Link>
                                <button className={css.button}>Contato</button>
                            </navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}