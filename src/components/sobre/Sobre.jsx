import '../../assets/css/Css_components/Sobre.css'
import image from '../../assets/img/world.jpg'
import image2 from '../../assets/img/tecnologia.jpg'

export const Sobre = () => {

    return ( 
        <div id="sobre"> 
            <h1 class="titulo-sobre">Informações Corporativas</h1>
            <div class="conteudo">
                <div class="texto-conteudo"> 
                    <h1 class="sobre-hauawei">Quem é a Huawei?</h1>
                    <p class="texto-sobre">Fundada em 1987, a Huawei é uma fornecedora líder global de soluções de Tecnologia da Informação e Comunicação (TIC). Nossa missão é levar o 
                    poder da conectividade para cada pessoa, lar e organização, rumo a um mundo totalmente conectado e inteligente. Temos quase 194.000 funcionários e operamos em mais de 170 países e 
                    regiões, atendendo a mais de três bilhões de pessoas em todo o mundo. Na Huawei, a inovação se concentra nas necessidades dos clientes. Investimos 
                    fortemente em pesquisa básica, concentrando-nos em avanços tecnológicos que impulsionam o mundo.</p>           
                </div>  
                <img className="img-world" src={image}/>   
            </div> 
            <div class="conteudo">
                <img className="img-world" src={image2}/>   
                <div class="texto-conteudo2"> 
                    <h1 class="sobre-hauawei">O que Desenvolvemos?</h1>
                    <p class="texto-sobre">Na era da Inovação 2.0, avanços teóricos e novas invenções baseadas em tecnologias básicas ajudarão a enfrentar desafios globais, apoiando nossa visão e 
                    suposições para o futuro. À medida que entramos nessa nova era, a Huawei aumentará ainda mais o investimento em inovação, levando a inovação para o próximo nível e 
                    fornecendo, constantemente, valor ao setor e à sociedade em geral. Continuaremos trabalhando para construir um mundo totalmente conectado e inteligente, beneficiando assim 
                    mais pessoas, lares e organizações.</p>           
                </div>  
            </div> 
        </div>
    )
}

