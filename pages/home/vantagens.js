import css from './vantagens.module.css'
import {Container, Row, Col} from "reactstrap"
import {BsCheck2Circle} from "react-icons/bs"

export default function vantagens(){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <div className={css.title}>Vantagens em <br/> utilizar <span style={{color: '#ffc700'}}>PESA Energia</span></div>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6} className={css.bgcard}>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div className={css.text}>
                                <BsCheck2Circle className={css.icon}/> Lorem ipsum dolor sit amet, consectetur adipiscing
                            </div>
                            <div><button className={css.button1}>Botão CTA Principal</button></div>
                            <div><button className={css.button2}>CTA Secundário</button></div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}