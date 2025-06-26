import React from 'react'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'

const Home = () => {
  return (
  <>
   <div className='container-fluid'>
    
          <Navbar />
         <div className='row ' >
          <div className='col-lg-8 m-auto '>
            <Posts/>
          </div>
          </div>
        </div>
  </>
  )
}

export default Home