import logo from "../assets/logo.png"
import hamburguer from "../assets/hamburguer.png"

function Header () {
  return (
    <div className='w-full h-screen  absolute z-10 mt-16'>
        <div className='container mx-auto flex justify-between'>
            <img src={logo} alt="Logo da empresa Netflix " className="cursor-pointer shadow-sm" />
            <img src={hamburguer} alt="Menu Hamburguer" className="cursor-pointer shadow-sm hover:"/>
        </div>
    </div>
  )
}

export default Header
