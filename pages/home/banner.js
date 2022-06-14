import css from './banner.module.css'
import {Container, Row, Col} from "reactstrap"

export default function Banner(){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <Col md={5}>
                        <div className={css.title}>
                            Frase <span style={{color: '#ffc700'}}>vendedora</span> de efeito e curta
                        </div>
                        <div className={css.text}>
                            Frase secundária de <span style={{color: '#ffc700'}}>auxílio para a frase vendedora</span> aqui, curta, de no mínimo 2 linhas e máximo 3 linhas.
                        </div>

                        <Row style={{marginTop: '20px'}}>
                            <Col>
                                <button className={css.button1}>Botão CTA Principal</button>
                                <button className={css.button2}>CTA Secundário</button>
                            </Col>
                        </Row>
                    </Col>

                    <Col></Col>
                </Container>
            </div>
        </div>
    )
}