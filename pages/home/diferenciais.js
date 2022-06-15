import css from './diferenciais.module.css'
import {Container, Row, Col} from "reactstrap"
import {BsCheckLg} from "react-icons/bs"

export default function Diferenciais(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                <div className={css.frase}>Qual o nosso diferencial e porque somos <span style={{color: '#ffc700'}}>líderes no mercado?</span></div>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                    <BsCheckLg className={css.icon}/>
                        <div className={css.card}>
                        <div className={css.title}>
                            Lorem Ipsum Dolor
                        </div>
                        <div className={css.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
                         risus in hendrerit gravida rutrum. Commodo odio aenean sed adipiscing diam. Maecenas pharetra convallis posuere morbi leo urna molestie at.
                          Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Odio morbi quis commodo odio aenean. Sed sed risus pretium quam 
                          vulputate dignissim. 
                        </div>
                    </div>
                    </Col>

                    <Col style={{textAlign: 'center'}}>
                    <BsCheckLg className={css.icon}/>
                        
                        <div className={css.card}>
                    <div className={css.title}>
                        Lorem Ipsum Dolor
                    </div>
                        <div className={css.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
                         risus in hendrerit gravida rutrum. Commodo odio aenean sed adipiscing diam. Maecenas pharetra convallis posuere morbi leo urna molestie at.
                          Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Odio morbi quis commodo odio aenean. Sed sed risus pretium quam 
                          vulputate dignissim. 
                        </div>
                    </div>
                    </Col>

                    <Col style={{textAlign: 'center'}}>
                    <BsCheckLg className={css.icon}/>
                        <div className={css.card}>
                        <div className={css.title}>
                            Lorem Ipsum Dolor
                        </div>
                        <div className={css.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
                         risus in hendrerit gravida rutrum. Commodo odio aenean sed adipiscing diam. Maecenas pharetra convallis posuere morbi leo urna molestie at.
                          Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Odio morbi quis commodo odio aenean. Sed sed risus pretium quam 
                          vulputate dignissim. 
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}