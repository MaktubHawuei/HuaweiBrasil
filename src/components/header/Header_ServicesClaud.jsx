import '../../assets/css/Css_components/Header_ServicesClaud.css'
 import img_cartton from '../../assets/img/clou-banner-agora.jpg'
 import logo from '../../assets/img/Logo-huawei.png'

export const Header_ServicesClaud = (props) => {

    return (
        <div className='Header_ServicesClaud-div' >
            <img src={img_cartton} alt="" id='img-cartoon' />
            <div className='Header_ServicesClaud-items'>
                <img src={logo} alt="" id='Logo-huawei-services-2'/>
                <span>
                    <p>Amplie seu portfólio de serviços oferecido pela Huawei Cloud.</p>
                    <span>Conte com uma estrutura comercial, técnica e de marketing para desenvolver seus negócios em Cloud com margem, escala e recorrência.</span>
                </span>
                <button className='button-19'>Saiba mais</button>
            </div>
        </div>
    )
}