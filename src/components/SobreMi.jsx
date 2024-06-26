import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav'
import '../Nav.css'
import '../SobreMi.css'
import aboutMe from  '../assets/aboutMe.png';

function SobreMi() {
    return (
        <>
            <Nav></Nav>
            <div className='homeText'>
                <h2>Naylimar Alvarez Cermeño</h2>
                <section className='bio'>
                    <img className='foto1' src={aboutMe}/>
                    <p className='texto1'>
                        Violinista venezolana, graduada en Interpretación Musical
                        (Conservatorio de Música Simón Bolívar/ UNEARTE) ;
                        En el año 2015, debuta como solista con el concierto para violín y Orquesta de
                        Khachaturian con la orquesta Sinfónica Regional de los Altos Mirandinos.
                        <br></br>
                        En su destacada carrera musical, ha tocado con diversas orquestas, nacionales e
                        internacionales como la Orquesta Sinfónica de Caracas, Orquesta Filarmónica de Santiago,
                        Orquesta Sinfónica Regional de los Altos Mirandinos, Orquesta Música Para la Integración;
                        de la mano de directores como Félix Briceño, Andrés Gonzalez, Antonio Mayorca,
                        Raúl A. Delgado, Dietrich Paredes, Diego Matheuz, Pedro Pablo Prudencio, Paolo Bortolameoli,
                        Luis Toro, Alejandra Urrutia, Gustavo Dudamel. 
                        <br></br>
                        Durante toda su carrera musical,
                        ha desempeñado también una importante labor como docente de violín, cuenta con 7 años de
                        experiencia enseñando este instrumento a niños, jóvenes y adultos.
                    </p>
                </section>
            </div>
        </>
    )
}
export default SobreMi