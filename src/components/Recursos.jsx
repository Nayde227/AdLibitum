import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav'
import '../Nav.css'
import '../Recursos.css'
import portada from  '../assets/Portada.jpg';

function Recursos() {
    return(<>
        <Nav></Nav>
        <section className='cuaderno'>
        <img className='imgR' src={portada}/>
        <a className='guía' href="https://drive.google.com/file/d/16aI_wrhSf2ZoFiSz71xd1-7XHfZZYvT8/view?usp=drive_link" download="GuíaPrácticaViolín.pdf" target="_blank">Descargar Recursos Gratuitos</a>
        </section>
        </>
    )
}
export default Recursos