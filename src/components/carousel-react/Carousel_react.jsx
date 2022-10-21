import '../../assets/css/Css_components/Carousel_react.css'
import gg from '../../assets//img/reconhecimento-facial.png'
import Reconhecimento_facial from '../../assets//img/reconhecimento-facial.png'
import Controle_estoque from '../../assets//img/estoque.png'
import Reconhecimento_imagem from '../../assets//img/processamento-de-imagem.png'
import Ia from '../../assets//img/ia.png'
import Dados from '../../assets//img/dados.png'
import Api from '../../assets//img/api.png'
import Robo from '../../assets//img/robo.png'
import Web from '../../assets//img/hospedagem-na-web.png'
import Seguranca from '../../assets//img/camera-de-seguranca.png'
import {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel_react = (props) => {

    return (
        <div className='Carousel_react-div' >
                        <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Reconhecimento Facial</span> <img src={Reconhecimento_facial} alt="" className='Carousel_react-img' />
                <span className='Carousel_react-discricao'>Controle de acesso com reconhecimento facial faça a liberação de portas , catracas tudo que você precisa de liberação nosso serviço de controle de acesso  na Huawei cloud </span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'><span className='Carousel_react-titulo'>Controle De Estoque</span> <img src={Controle_estoque} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Controle de estoque com estatisticas  com  forme a entrada de produtos e saida gatilhos com bot para fornecedores para reposição de estoque ,dashboard com estaticicas de separaçao dos produtos armazenados um serviço na huawei cloud</span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Reconhecimento de Imagem</span><img src={Reconhecimento_imagem} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Faça reconhecimento de imagem atrás de uma ia , com vários recursos para identificação de objetos em imagem ou para identificar caracteres especiais</span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Infraestrutura de IA</span><img src={Ia} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Treine modelos de aprendizado profundo e machine learning de maneira econômica e iterando mais rapidamente com as Cloud GPUs e Cloud TPUs de alto desempenho. </span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Ciência de dados </span><img src={Dados} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Tenha insights de dados com nosso conjunto completo de ferramentas de gerenciamento de dados, análise e machine learning.  </span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Huawei Databese Api </span><img src={Api} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Crie uma api como armazenamento de dados dentro da cloud e tenha segurança com os dados e tenha acesso em qualquuer lugar nunca ficou tao faço fazer sua api</span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Bot Huawei cloud</span><img src={Robo} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Faça um bot para facilitar tarefas repetitivas aumente sua produtividade . criação dinamica sem nececidade de programação</span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Họsting web</span><img src={Web} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Seu site no ar com mais facilidade, alta compatibilidade com frameworks com mais facilidade para deploy usando git ou pasta na enviada para cloud  </span></div></SwiperSlide>
                <SwiperSlide ><div className='Carousel_react-box'> <span className='Carousel_react-titulo'>Security Huawei</span><img src={Seguranca} alt="" className='Carousel_react-img'/>
                <span className='Carousel_react-discricao'>Conecte sua camera de segurança Security Huawei e deixa a ia reconhecer Movimentos ou pessoas estranhas na sua residencia ou empresa</span></div></SwiperSlide>
            </Swiper>
        </div>
    )
}