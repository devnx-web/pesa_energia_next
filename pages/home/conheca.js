import css from './conheca.module.css'
import {Container, Row, Col} from "reactstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
    dots: true,
    arrows: true, 
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

export default function Conheca(){
    return(
        <div>
            <div className={css.bgcolor}>
                <Container>
                    <div className={css.text}>Conheça nossos <br/> modelos de <span style={{color: '#ffc700'}}>Geradores!</span></div>

                    <div>
                        <Slider {...settings}>
                           <div>
                            <Image src="/img/gerador.png" width="1500" height="1000" alt="gerador"/>
                            <div className={css.bgcard}></div>
                            <div className={css.categoria}>Categoria</div>
                            <div className={css.modelo}>Modelo do Gerador</div>
                           </div>

                           <div>
                            <Image src="/img/gerador.png" width="1500" height="1000" alt="gerador"/>
                            <div className={css.bgcard}></div>
                            <div className={css.categoria}>Categoria</div>
                            <div className={css.modelo}>Modelo do Gerador</div>
                           </div>

                           <div>
                            <Image src="/img/gerador.png" width="1500" height="1000" alt="gerador"/>
                            <div className={css.bgcard}></div>
                            <div className={css.categoria}>Categoria</div>
                            <div className={css.modelo}>Modelo do Gerador</div>
                           </div>

                           <div>
                            <Image src="/img/gerador.png" width="1500" height="1000" alt="gerador"/>
                            <div className={css.bgcard}></div>
                            <div className={css.categoria}>Categoria</div>
                            <div className={css.modelo}>Modelo do Gerador</div>
                           </div>

                           <div>
                            <Image src="/img/gerador.png" width="1500" height="1000" alt="gerador"/>
                            <div className={css.bgcard}></div>
                            <div className={css.categoria}>Categoria</div>
                            <div className={css.modelo}>Modelo do Gerador</div>
                           </div>
                        </Slider>
                    </div>
                </Container>
            </div>
        </div>
    )
}