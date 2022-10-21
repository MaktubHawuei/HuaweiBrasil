import React, { Component } from 'react';
import { Connects } from '../components/navbar/Connects'
import { LandingPage } from '../components/content/LandingPage'
import { G5 } from '../components/content/G5'
import { Parceria } from '../components/content/Parceria';
import onda from '../assets/img/wave.svg';
import ondaVerso from '../assets/img/wave (1).svg';
import {Inovacao} from '../components/content/Inovacao';
import { Footer_ServicesClaud_Gran } from '../components/footer/Footer_ServicesClaud_Gran'


class HauweiConnect extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Connects/>
                <Inovacao/>
                <LandingPage/>
                <img src={onda} alt="Imagem vetorial de Ondas"/>
                <G5/>
                <img src={ondaVerso} alt="Imagem vetorial de Ondas"/>
                <Parceria/>
                <Footer_ServicesClaud_Gran/>
            </>
        );
    }
}
 
export default HauweiConnect;