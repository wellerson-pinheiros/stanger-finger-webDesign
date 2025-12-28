import bg2 from '../assets/bg2.png'
import netflix from '../assets/netflixlogo.png'

function Home() {
  return (
    <div  className='w-full h-full flex itens-center'>
      <img src={bg2} alt="" className='bg-cover bg-no-repeat w-full h-full '/>
      
      <div className='container mx-auto '>
          <img src={netflix} alt="Logo da netflix " className=' ' />
      </div>




    </div>
  )
}


export default Home