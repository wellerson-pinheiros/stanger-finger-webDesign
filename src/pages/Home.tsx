import stanger from '../assets/bg3.png'
import stanger2 from '../assets/wallpapersden.png'

function Home() {
  return (
    <div  className=' pai w-full h-[130vh] flex items-center justify-center relative  z-0 bg-black'>   
          <img  src={stanger} data-speed=".3" alt="" className='bg-no-repeat w-screen h-screen absolute inset-0 object-cover'/>
          <div className='absolute bottom-0 z-20 w-full h-full '>
               <img  src={stanger2} alt="" className=' w-full h-full  object-cover'/>
          </div>
         
    </div>
  )
}


export default Home