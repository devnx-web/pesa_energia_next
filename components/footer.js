import css from './footer.module.css'
import {Row, Col, Container} from "reactstrap"

export default function Footer(){
    return(
        <div>
            <div className={css.bg}>
                <Container>
                    <div className={css.ttFooter}>Nossas unidades <br/> de atendimento</div>
                    <Row style={{marginTop: '50px'}}>
                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '50px'}}>
                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '50px'}}>
                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={css.filial}>Filial Curitiba - Matriz</div>
                            <div className={css.endereco}>Rodovia BR-116, 11807<br/> 
                                Hauer<br/> 
                                CEP 81690-100<br/> 
                                Curitiba / PR<br/> 
                                +55 41 2103-2211
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={css.bgcopy}>
                <div className={css.copy}>PESA - PARANÁ EQUIPAMENTOS S.A. - Todos os direitos reservados - 2022</div>
            </div>
        </div>
    )
}