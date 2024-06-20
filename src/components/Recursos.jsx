import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav'
import '../Nav.css'

function Recursos() {
    return(<>
        <Nav></Nav>
        <a className='guía' href="https://drive.google.com/file/d/16aI_wrhSf2ZoFiSz71xd1-7XHfZZYvT8/view?usp=drive_link" download="GuíaPrácticaViolín.pdf" target="_blank">Descargar Recursos Gratuitos</a>
        </>
    )
}
export default Recursos