import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../Nav.css'
import logo from '../assets/LogoSinFondoW.png';
function Nav() {

    return (
        <>
            <section className='navBox'>
                <div className='banner'>
                    <img className="logo" src={logo}>
                    </img>
                    <h1> Ad Libitum Academy</h1>
                </div>
                <div className="nav">
                    <div className='list'>


                            <Link to="/" className='textNav'>Home</Link>
                            <Link to="/blog" className='textNav'>Blog</Link>
                            <Link to="/clases" className='textNav'>Clases</Link>
                            <Link to="/about-me" className='textNav'>Sobre Mí</Link>
                            <Link to="/eventos" className='textNav'>Eventos</Link>
                            <Link to="/recursos" className='textNav'>Recursos Gratuitos</Link>
                        
                        <a className='cotiza' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScA_TxYyOAO7u_1cTckwZHX6yzRxXsOBbhIY2R4dIqM0DO82A/viewform?usp=sf_link'> Cotiza Aquí</a>
                    </div>

                </div>
                <footer className='footNav'>
                    <a href="https://www.instagram.com/adlibitumacademy/" target="_blank" rel="noopener noreferrer" className="instagram-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://wa.me/+56965054961" target="_blank" rel="noopener noreferrer" className="instagram-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="mailto:academiadlibitum1@gmail.com" className="link gmail-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/320px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="social-icon" />

                    </a>
                </footer>
            </section>

        </>
    )
}
export default Nav