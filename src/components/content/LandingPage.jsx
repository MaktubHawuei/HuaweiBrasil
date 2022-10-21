import '../../assets/css/Css_components/LandingPage.css';

export  const LandingPage = (props) => {

    return (
        <div className='fundo-landing-page' id="landing">
            <div className='fundo-5g-texto'>
                <div id='texto-5g'>
                    <h1 className='titulo-5g'>O 5G está chegando até você</h1>
                    <p>Não perca nada. Saiba tudo o que acontece<br/>no mundo e compartilhe os melhores momentos<br/> com os amigos e família.</p>
                    <button className='button-saiba-mais'><p>Saiba Mais</p></button>
                </div>
            </div>
            <div className='fundo-5g' alt="Imagem de fundo 5G"></div>
        </div>
    )
}