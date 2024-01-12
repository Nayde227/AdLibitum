import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class="Entrada">
    <div class="title">
      <img class="logo" src="src/assets/LogoSinFondoW.png">
        </img>
    <h2>Ad Libitum Academy</h2>
    <nav> 
      <h4>Home Page</h4>
      <h4>Blog </h4>
      <h4>Clases</h4>
      <h4>Sobre mí</h4>
      <h4>Eventos</h4>
      <h4>Recursos Gratuitos</h4>
    </nav>
    </div>
    <div class="homeText">
    <h2>
      ¿Qué es Ad Libitum?
    </h2>
    <p>"Ad Libitum" es un término musical de origen latino que se traduce como "a placer" o "a voluntad".
      En el mundo de la música, cuando un músico realiza una interpretación "ad libitum", tiene la libertad de variar la
      ejecución según su gusto o elección personal.
      Esta expresión refleja la creatividad y la libertad artística que buscamos fomentar en nuestra academia.
    </p>
    <p>
      En Ad Libitum, no solo te enseñamos las notas y los ritmos, sino que también te inspiramos a explorar tu propia expresión musical.
       Aquí, la música no es simplemente una serie de notas en una partitura; es una experiencia personal y única que puedes moldear a tu antojo.
    </p>
    <p>
      Nuestros programas están diseñados para nutrir tanto a principiantes como a músicos experimentados,
       brindándote las herramientas necesarias para comprender la teoría musical, perfeccionar tus habilidades técnicas y,
        lo más importante, encontrar tu voz musical única.
    </p>
    <p>
      En Ad Libitum, la música no se trata solo de seguir reglas, sino de romper barreras y explorar nuevas fronteras. 
      Únete a nosotros en este emocionante viaje musical donde la creatividad florece y la expresión personal es aplaudida.
       ¡Descubre tu música "ad libitum" con nosotros!
    </p>
  </div>
  </section>


    </>
  )
}

export default App
