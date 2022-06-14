import css from './frase.module.css'
import {Container, Row, Col} from "reactstrap"
import Image from "next/image";

export default function Frase(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container fluid>
                    <Row>
                        <Col>
                        <div className={css.frase}>Frase vendedora de no máximo 3 linhas aqui</div>
                        </Col>

                        <Col md={7} className={css.img}>
                        <Image src="/img/gerador-frase.png"  width="1500" height="825" alt="img" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}