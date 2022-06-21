import css from './locais.module.css'
import { Container, Row, Col } from "reactstrap"
import Image from 'next/image'

export default function Locais(){
    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className={css.title}>Locais que a <span style={{color: '#ffc700'}}>PESA Energia</span> atende</div>
                            <div className={css.text}>
                            Lorem ipsum diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
                            </div>
                            <div><button className={css.button}>Botão CTA Principal</button></div>
                        </Col>

                        <Col md={6}>
                            <Image src="/img/brasil.png" width="394" height="403" alt="brasil"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}