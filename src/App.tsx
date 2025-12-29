
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import Home from './pages/Home'

//Importar os plugins GSAP que utilizarei
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SectionVideo from './components/SectionVideo'



// Registrando os plugins que usarei na página para fazer as animações
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function App() {

useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 0.1,
      smoothTouch: 0,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
    <div id="smooth-wrapper">
      <div  id="smooth-content">
        <Header />
        <HomeSection/>
        <Home />
        <SectionVideo/>
      </div>
    </div>
   
    
    </>
    
  )
}

export default App
