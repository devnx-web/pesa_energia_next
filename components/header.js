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

                        <Col style={{textAlign: 'right'}}>
                            <navbar style={{alignItems: 'center'}}>
                                <span className={css.link}>Home</span>
                                <span className={css.link}>O Grupo</span>
                                <span className={css.link}>Geradores</span>
                                <span className={css.link}>Mais Opções</span>
                                <button className={css.button}>Contato</button>
                            </navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}