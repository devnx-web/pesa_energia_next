import css from './vantagens.module.css'
import {Container, Row, Col} from "reactstrap"

export default function vantagens(){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <div className={css.title}>Vantagens em <br/> utilizar <span style={{color: '#ffc700'}}>PESA Energia</span></div>
                </Container>
            </div>
        </div>
    )
}