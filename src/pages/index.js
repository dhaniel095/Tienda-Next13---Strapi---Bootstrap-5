
import Layout from '../components/layout'
import Image from 'next/image'
import profilePic from 'public/slider on.png'

export default function Home () {
  
    return (
     

    

  <Layout>
      <div className='container'>
      <div className='row'>
        <Image src={profilePic} className="img-fluid" width={500} height={350} />
      </div>
    </div>
     <h1>Inicio</h1>  
    </Layout>      
     
    )
  
}
