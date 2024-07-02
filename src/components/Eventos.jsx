import eventos from '../assets/eventos.jpg'
import Nav from './nav'
import '../Nav.css'
import '../Eventos.css'
function Eventos() {
    return (
        <><Nav></Nav>
            <section className='homeText'>
                <h2>Eventos</h2>
                <div className='eText'>
                    <img className='imgE' src={eventos}></img>
                    <p> 
                        Si buscas añadir un toque especial y elegante a tu boda, aniversario, fiesta o cualquier
                         otra ocasión especial, contamos con servicios de música en vivo para eventos privados.
                         Nos adaptamos al tipo de celebración, a la música que quieras, y al estilo de ceremonia. 
                            No te preocupes más, nosotros lo solventamos.
                         
                         Con un repertorio que podrás escoger, me aseguro de crear el ambiente perfecto para tu celebración.
                         <br></br>
                         ¡Estaré encantada de ser parte de tu evento!</p>
                         
                </div>
                <a className='cotizaE' target="_blank" href='https://forms.gle/GiUKyzn1D1YYnsn18'> Cotiza Aquí Tu Evento</a>
            </section>
        </>
    )
}
export default Eventos