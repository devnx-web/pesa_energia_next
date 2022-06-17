import css from './contador.module.css';
import {Container, Row, Col} from "reactstrap"
import Image from "next/image";

export default function Contador(){
    return(
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <div className={css.text}>A <span style={{color: '#ffc700'}}>PESA Energia</span> já instalou em <span style={{color: '#ffc700'}}>capacidade</span> de potência mais de meio milhão de kVA no Sul do Brasil nos <span style={{color: '#ffc700'}}>últimos 10 anos!</span></div>
                </Container>
            </div>
        </div>
    )
}