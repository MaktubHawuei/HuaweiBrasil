import '../../assets/css/Css_components/Servicos.css'
import img1 from '../../assets/img/cloud.svg'
import img2 from '../../assets/img/5g.svg'
import img3 from '../../assets/img/ai.svg'

export const Servicos = () => {

    return ( 
        <div id="servicos"> 
            <h1 class="titulo-servicos">O que oferecemos?</h1>     
            <div class="box">
                <div class="card">
                    <div class="images"><img className="imgs1" src={img1}/></div>
                    <h3 class="nome-servicos"><b>Cloud Computing</b></h3>
                    <p class="descricao-servicos">Acelerando a transformação digital, inovação e inteligência.</p>
                </div>
                <div class="card">
                    <div class="images"><img className="imgs" src={img2}/></div>
                    <h3 class="nome-servicos"><b>Huawei 5G</b></h3>
                    <p class="descricao-servicos">Trazendo novo valor com recursos de rede sem precedentes.</p>
                </div>
                <div class="card">
                    <div class="images"><img className="imgs2" src={img3}/></div>
                    <h3 class="nome-servicos"><b>Artificial Intelligence</b></h3>
                    <p class="descricao-servicos">Potenciando a inteligência com soluções full-stack para todos os cenários.</p>
                </div>
            </div>
        </div>
    )
}
