
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Css_components/Navbar_ServicesClaud.css'
import cloud from '../../assets//img/cloud (1).png'
import connect from '../../assets/img/Huawei.jfif'
export const Navbar_ServicesClaud = (props) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 150);
    });
    }, []);

    return (
        <div className={scroll ? "Navbar_ServicesClaud-div Navbar_ServicesClaud-compacto" : "Navbar_ServicesClaud-div"} >
            <div className='Navbar_ServicesClaud-items'>
                <img src={cloud} alt=""  id='Logo-huawei-services' />
                <span  className={scroll ? "Navbar_ServicesClaud-span-compacto Navbar_ServicesClaud-span" : "Navbar_ServicesClaud-span-compacto"}>{props.discricao}</span>
                <ul className={scroll ? " Navbar_ServicesClaud-bnt Navbar_ServicesClaud-bnt-compacto" : "Navbar_ServicesClaud-bnt"}>
                    <li><Link to='/'><a href="">Home</a></Link></li>
                    <li><Link to='/hauweiservicesclaud'><a href="" >Huawei Cloud Servirços</a></Link></li>
                    <li><Link  to='/hauweiconnect'><a href="">Connect 5G</a></Link></li>
                </ul>
            </div>
        </div>
    )
}