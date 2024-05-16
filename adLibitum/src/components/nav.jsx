import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../Blog.css'

function Nav() {

    return (
        <>
            <section class="Entrada">

                <div class="title">
                    <img class="logo" src="src/assets/LogoSinFondoW.png">
                    </img>
                    <h3>Ad Libitum Academy</h3>
                    <nav>
                        <ul className='list'>
                            <li>
                                <Link to="/" className='textNav'>Home</Link>
                            </li>
                            <li>
                                <Link to="/blog" className='textNav'>Blog</Link>
                            </li>
                        <li className='textNav'>Clases</li>
                        <li className='textNav'>Sobre mí</li>
                        <li className='textNav'>Eventos</li>
                        <li className='textNav'>Recursos Gratuitos</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}
export default Nav