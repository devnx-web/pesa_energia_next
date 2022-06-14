import css from './produtos.module.css'
import {Container, Row, Col} from "reactstrap"

export default function Produtos(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <div className={css.frase}>Conehça os nossos principais produtos e serviços!</div>
                </Container>
            </div>
        </div>
    )
}