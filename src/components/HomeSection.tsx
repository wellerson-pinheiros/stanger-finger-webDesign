import netflix from '../assets/netflixlogo.png'
import stangerfingerexperience from '../assets/stanguerfingerexperience.png'
import city from '../assets/city.png'


function HomeSection () {
  
  return (
    <div   className=' w-full absolute mt-40 z-10 '>
        <div className='container mx-auto flex '>
            <div className='flex justify-between w-full items-center'>
                <div className='experience'>
                        <h1 className='text-white text-5xl leading-14' style={{ fontFamily: 'Geologica, sans-serif' }}>
                            The experience<br/>
                            <strong className='font-black'>STRANGER THINGS</strong>
                        </h1>  
                </div>
                <div className='flex flex-col items-center gap-4'>
                <h1 className='text-5xl text-white font-sans pt-10 ' style={{ fontFamily: 'Henny Penny, cursive' }}>
                    Welcome to Hawkins
                </h1>
                <h2 className='text-3xl text-white text-center font-medium ' style={{ fontFamily: 'Geologica, sans-serif' }}>
                    A experiência terminou, mas você ainda pode entrar <br/> em Hawkins em uma de nossas outras localidades.
                </h2>
                
                <img src={city} alt="" className='w-80   right-10 ' />
            </div>
            </div>
            
           
                        
                    
        </div>
    </div>
  )
}
export default HomeSection