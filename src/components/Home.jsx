import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './nav'

import '../Nav.css'


function Home() {


    return (<>
        <Nav></Nav>
        <h1>Home</h1>
        </>
    )

}




export default Home