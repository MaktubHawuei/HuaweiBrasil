import '../../assets/css/Css_components/Slogan_ServicesClaud.css'
import cloud from '../../assets//img/cloud (1).png'
import Slogan_img from '../../assets//img/slogan.png'

export const Slogan_ServicesClaud = (props) => {

    return (
        <div className="Slogan_ServicesClaud-div" >
            <div className="Slogan_ServicesClaud-text">
                <img src={Slogan_img} alt="" />
            </div>
            <div  className="Slogan_ServicesClaud-img">
                <img className='Slogan_ServicesClaud-img-cloud' src={cloud} alt="" />
            </div>
        </div>
    )
}