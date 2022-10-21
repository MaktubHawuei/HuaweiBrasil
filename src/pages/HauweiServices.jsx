import React, { Component } from 'react';
import '../assets/css/HauweiServices.css'
import { Navbar_ServicesClaud } from '../components/navbar/Navbar_ServicesClaud'
import { Header_Services } from '../components/header/Header_Services'
import { Servicos } from '../components/servicos/Servicos'
import { Sobre } from '../components/sobre/Sobre'
import { Footer_ServicesClaud } from '../components/footer/Footer_ServicesClaud'

class HauweiServices extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar_ServicesClaud discricao='Huawei é uma fornecedora líder global de soluções de Tecnologia da Informação e Comunicação (TIC).' />
            <Header_Services/>
            <Servicos/>
            <Sobre/>
            <Footer_ServicesClaud/>
            </>
        );
    }
}
 
export default HauweiServices;