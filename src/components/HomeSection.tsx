import netflix from '../assets/netflixlogo.png'
import stangerfingerexperience from '../assets/stanguerfingerexperience.png'
import city from '../assets/city.png'


function HomeSection () {
  return (
    <div className='w-full absolute mt-40'>
        <div className='container mx-auto flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <img src={netflix} alt="Logo Netflix" className='w-80 h-auto items-center justify-center' />              
                <img src={stangerfingerexperience} alt="Logo Stanguer finger experience"  className='w-80'/>  

                <h2 className='text-5xl text-white text-center font-medium ' style={{ fontFamily: 'Geologica, sans-serif' }}>
                    A experiência terminou, mas você ainda pode entrar <br/> em Hawkins em uma de nossas outras localidades.
                </h2>
                <h1 className='text-6xl text-white font-sans pt-10 ' style={{ fontFamily: 'Henny Penny, cursive' }}>
                    Welcome to Hawkins
                </h1>
            </div>
           
                        <img src={city} alt="" className='w-80 ml-40 absolute right-10 ' />
                    
        </div>
    </div>
  )
}
export default HomeSection