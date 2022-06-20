import css from './quemsomos.module.css'
import {Container, Row, Col} from "reactstrap"
import Image from "next/image"

export default function Quemsomos(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <Row>
                        <Col md={6}>
                        <div className={css.title}>Quem <span style={{color: '#ffc700'}}>somos</span> nós</div>
                        <div className={css.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Massa placerat duis ultricies lacus sed turpis tincidunt id. Molestie a iaculis at erat pellentesque. Nunc scelerisque viverra
                        <br/><br/>
                        Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vitae elementum curabitur vitae nunc sed. Ornare arcu odio 
                        ut sem nulla pharetra diam sit. Ac odio tempor orci dapibus ultrices. Sociis natoque penatibus et magnis dis parturient montes.
                         Nunc consequat interdum varius sit amet mattis vulputate.
                        </div>

                        <Row style={{marginTop: '50px'}}>
                            <Col className="d-flex align-items-center mt-3 mt-md-0">
                            <div className={css.border}>
                                15k
                            </div>
                            <div>
                                <span className={css.tt}>Clientes Atendidos</span>
                                <div className={css.description}>Já atendemos mais de 15 mil clientes</div>
                            </div>
                            </Col>

                            <Col className="d-flex align-items-center mt-3 mt-md-0">
                            <div className={css.border}>
                                +82
                            </div>
                            <div>
                                <span className={css.tt}>Países Presentes</span>
                                <div className={css.description}>Estamos presentes em mais de 82 países</div>
                            </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '50px'}}>
                            <Col>
                                <button className={css.button1}>Botão CTA Principal</button>
                                <button className={css.button2}>CTA Secundário</button>
                            </Col>
                        </Row>
                        </Col>

                        <Col md={6}>
                            <Image src="/img/img-quemsomos.jpg" width="550" height="563" alt="img-sobre" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}