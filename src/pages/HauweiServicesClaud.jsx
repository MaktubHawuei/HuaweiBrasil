import React, { Component } from 'react';
import '../assets/css/HauweiServicesClaud.css'
import { Navbar_ServicesClaud } from '../components/navbar/Navbar_ServicesClaud'
import { Header_ServicesClaud } from '../components/header/Header_ServicesClaud'
import { Carousel_react } from '../components/carousel-react/Carousel_react'
import { Slogan_ServicesClaud } from '../components/slogan/Slogan_ServicesClaud'
import { Footer_ServicesClaud_Gran } from '../components/footer/Footer_ServicesClaud_Gran'

class HauweiServicesClaud extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar_ServicesClaud discricao='Serviços prontos na cloud prontos para uso com segurança e facilidade' logo= '../../assets//img/cloud (1).png'/>
            <Header_ServicesClaud/>
            <Carousel_react/>
            <Slogan_ServicesClaud/>
            <Footer_ServicesClaud_Gran/>
            </>
        );
    }
}
 
export default HauweiServicesClaud;