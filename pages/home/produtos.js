import css from './produtos.module.css'
import {Container, Row, Col} from "reactstrap"
import Image from 'next/image'

export default function Produtos(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <div className={css.frase}>Conheça os <span style={{color: '#ffc700'}}>nossos principais</span> produtos e serviços!</div>
                    <Row>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                        <Col>
                            <Image src="/img/vazio.jpg" width="385" height="224" alt="vazio" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}