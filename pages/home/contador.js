import css from './contador.module.css';
import {Container, Row, Col} from "reactstrap"
import Image from "next/image";

export default function Contador(){
    return(
        <div className={css.bgpage}>
           <div className="py-5">
              <Container className="py-5">
                <div>
                  <h2 className={css.titulo}>
                      A <span style={{color: '#FEC820'}}>PESA Energia</span> já instalou em <span style={{color: '#FEC820'}}>capacidade</span> de potência, mais
                      <br/>
                      de meio milhão de kVA no Sul do Brasil nos <span style={{color: '#FEC820'}}>últimos 10 anos!</span>
                  </h2>
                    <div className={css.paddingContador}>
                    <div className="justify-content-center d-flex">
                        <div className={css.shadowl}></div>
                        <div className={css.shadow}></div>
                        <div className={css.shadowr}></div>
                    </div>
                    <div className="justify-content-center d-flex">
                    <div className={css.contadorbd}>
                    <div className={css.contador}>
                        <Row>
                      <div className="d-flex align-items-center justify-content-center ">
                          <Col>
                          <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>
                            0
                          <div className={css.borda}></div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>0</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>0</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                          <div>
                              <div className={css.ponto}></div>
                              <div className={css.ponto}></div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>5</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>4</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>8</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                          <div>
                              <div className={css.ponto}></div>
                              <div className={css.ponto}></div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>2</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>8</div>
                          </div>
                          </div>
                          </div>
                          </Col>

                          <Col>
                              <div className={css.cardnumber3}>
                          <div className={css.cardnumber2}>
                          <div className={css.cardnumber}>
                          <div className={css.number}>9</div>
                          </div>
                          </div>
                          </div>
                          </Col>
                      </div>
                      </Row>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
              </Container>
           </div>
        </div>
    )
}