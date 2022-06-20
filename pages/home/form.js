import css from './form.module.css'
import { Col, Row, Container, Input } from "reactstrap"
import {BsFillTelephoneFill} from "react-icons/bs"

export default function Form(){
    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <div className={css.title}>Ainda está com dúvidas?</div>
                    <div className={css.title2}>Fale com a PESA Energia</div>
                    <div className={css.divider}></div>

                    <Row style={{marginTop: '50px'}}>
                        <Col>
                            <div className={css.cardForm}>
                                <div className={css.ttForm}>Fale com a gente</div>
                                <label className={css.label}>Nome</label>
                                <Input className={css.input} placeholder='Digite seu nome...' />
                                <label className={css.label}>E-mail</label>
                                <Input className={css.input} placeholder='Digite seu e-mail...' />
                                <label className={css.label}>Mensagem</label>
                                <Input className={css.input} placeholder='Digite sua mensagem...' />
                                <div className={css.txtCheck}><Input className={css.checkbox} type="checkbox" />Ao enviar, você aceita em receber novidades e promoçoes da PESA CAT</div>
                                <div><button className={css.button}>Enviar mensagem</button></div>
                            </div>
                        </Col>

                        <Col md={7}>
                        <iframe style={{marginTop: '30px'}} width="660" height="415" src="https://www.youtube.com/embed/eNdXtHbYDSA" className={css.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Row style={{marginTop: '20px'}}>
                        <Col className="d-flex align-items-center mt-3 mt-md-0">
                            <div className={css.border}>
                                <BsFillTelephoneFill/>
                            </div>
                            <div>
                                <span className={css.tt}>(41) 3030-3030</span>
                                <div className={css.description}>Lorem ipsum</div>
                            </div>
                            </Col>

                            <Col className="d-flex align-items-center mt-3 mt-md-0">
                            <div className={css.border}>
                            <BsFillTelephoneFill/>
                            </div>
                            <div>
                                <span className={css.tt}>(41) 3030-3030</span>
                                <div className={css.description}>Lorem ipsum</div>
                            </div>
                            </Col>

                            <Col className="d-flex align-items-center mt-3 mt-md-0">
                            <div className={css.border}>
                            <BsFillTelephoneFill/>
                            </div>
                            <div>
                                <span className={css.tt}>(41) 3030-3030</span>
                                <div className={css.description}>Lorem ipsum</div>
                            </div>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}