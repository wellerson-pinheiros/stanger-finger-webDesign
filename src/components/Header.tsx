import logo from "../assets/icons8-netflix-logo-501.png"
import hamburguer from "../assets/icons8-menu-481.png"

function Header () {
  return (
    <div className='w-full h-screen  absolute z-10 mt-16'>
        <div className='container mx-auto flex justify-between'>
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo da empresa Netflix " className="cursor-pointer shadow-sm" />
          </div>
           <div className="flex items-center justify-center">
            <img src={hamburguer} alt="Menu Hamburguer" className="cursor-pointer shadow-sm hover:"/>
          </div> 
            
        </div>
    </div>
  )
}

export default Header
