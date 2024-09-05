import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

function page() {
  return (
    // <div>
    //     <Sidebar/>
   
    // </div>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className='flex justify-center items-center h-screen text-5xl font-extrabold font-sans'>
        This Page is Coming Soon
    </div>


      </div>
    </div>
    
  )
}

export default page