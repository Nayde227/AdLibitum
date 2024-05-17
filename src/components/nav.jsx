import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../Blog.css'

function Nav() {

    return (
        <>
            <section >

                <div class="title">
                    <nav className='list'>
                        
                                <Link to="/" className='textNav'>Home</Link>
                                <Link to="/blog" className='textNav'>Blog</Link>
                                <Link to="/clases" className='textNav'>Clases</Link>
                                <Link to="/about-me" className='textNav'>Sobre Mí</Link>
                                <Link to="/eventos" className='textNav'>Eventos</Link>
                                <Link to="/recursos" className='textNav'>Recursos Gratuitos</Link>
                            
                    </nav>
                </div>
                <div className='banner'>
                <img class="logo" src="src/assets/LogoSinFondoW.png">
                    </img>
                    <h1>Ad Libitum Academy</h1>
                </div>
            </section>
                   
        </>
    )
}
export default Nav