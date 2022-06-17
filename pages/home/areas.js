import css from './areas.module.css'
import {Container, Row, Col} from "reactstrap"
import Image from 'next/image'

export default function Areas(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <div className={css.frase}>Conheça as <span style={{color: '#ffc700'}}>áreas de atuação</span> da PESA Energia</div>
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