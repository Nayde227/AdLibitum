import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav'
import '../Nav.css'
import '../Clases.css'

import violin from '../assets/violin.jpg'
function Clases() {
    return (
        <>

            <Nav></Nav>
            <section className='homeText'>
                <h2>Clases Personalizadas</h2>
                <div className='clasesText'>
                    <img className='fotoV' src={violin}></img>

                    <p>Ofrecemos clases personalizadas de una hora académica en nuestra academia de música.
                        En estas sesiones, exploraremos teoría musical y lectura de partituras, complementadas con la práctica del instrumento.
                        Cada clase está diseñada para adaptarse a las necesidades y objetivos individuales del estudiante, garantizando un aprendizaje integral y efectivo.
                        ¡Únete a nosotros y lleva tu habilidad musical al siguiente nivel!

                    </p>

                </div>

            </section>

        </>
    )
}
export default Clases