import '../../assets/css/Css_components/Connects.css';
import logo from '../../assets//img/logo Huawei.gif'
import { Link } from 'react-router-dom';


export  const Connects = (props) => {

    return (
        <div className="testando">
            <nav>
                <img  align="center"  alt="Coding" width="350" src={logo}  id='Logo-huawei-services' />
                <ul className='nav-ul'>
                    <li className='nav-li'><Link to='/'><a href="" className='nav-li'>Home</a></Link></li>
                    <li className='nav-li'><a href='#landing'>Para você</a></li>
                    <li className='nav-li'><a href='#5G'>O que é 5G</a></li>
                    <li className='nav-li'><a href='#parceria'>Parceiros</a></li>
                    <li className='nav-li'><Link to='/hauweiservicesclaud'><a href="" className='nav-li'>Huawei Cloud Servirços</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}