import '../../assets/css/Css_components/Footer_ServicesClaud.css'
import Web_developer from '../../assets/img/web-developer.png'
import Danilo  from '../../assets/img/1651056831300.jfif'
import Tifany  from '../../assets/img/74261213.jfif'
import Julia  from '../../assets/img/100294117.jfif'
import Felipe  from '../../assets/img/116307681.jfif'
import Louise  from '../../assets/img/100294543.jfif'
import Git from '../../assets/img/GitHub-Mark.png'
export const Footer_ServicesClaud = (props) => {

    return (
        <div className='Footer_ServicesClaud-div' >
            <img src={Web_developer} alt="" />
            <div className='Footer_ServicesClaud-box-central'>
            <div className='Footer_ServicesClaud-box'>
                    <img className='Footer_ServicesClaud-img' src={Danilo} alt="" />
                    <div  className='Footer_ServicesClaud-info'>
                        <div><a className='Footer_ServicesClaud-bnt' href="https://github.com/Realclownblack" target="_blank"><img id='uu' src={Git} alt="" /></a></div>
                    </div>
                </div>
                <div className='Footer_ServicesClaud-box'>
                    <img className='Footer_ServicesClaud-img' src={Tifany} alt="" />
                    <div  className='Footer_ServicesClaud-info'>
                        <div><div><a className='Footer_ServicesClaud-bnt' href="https://github.com/TifanyAlmeida" target="_blank"><img id='uu' src={Git} alt="" /></a></div></div>
                    </div>
                </div>
                <div className='Footer_ServicesClaud-box'>
                    <img className='Footer_ServicesClaud-img'  src={Julia} alt="" />
                    <div  className='Footer_ServicesClaud-info'>
                        <div><div><a className='Footer_ServicesClaud-bnt' href="https://github.com/juhelena" target="_blank"><img id='uu' src={Git} alt="" /></a></div></div>
                    </div>
                </div>
                <div className='Footer_ServicesClaud-box'>
                    <img className='Footer_ServicesClaud-img' src={Felipe} alt="" />
                    <div  className='Footer_ServicesClaud-info'>
                        <div><div><a className='Footer_ServicesClaud-bnt' href="https://github.com/ImFelipeArantes" target="_blank"><img id='uu' src={Git} alt="" /></a></div></div>
                    </div>
                </div>
                <div className='Footer_ServicesClaud-box'>
                    <img className='Footer_ServicesClaud-img' src={Louise} alt="" />
                    <div  className='Footer_ServicesClaud-info'>
                        <div><div><a className='Footer_ServicesClaud-bnt' href="https://github.com/Louise200" target="_blank"><img id='uu' src={Git} alt="" /></a></div></div>
                    </div>
                </div>                
            </div>
            <div id='gg'></div>

        </div>
    )
}