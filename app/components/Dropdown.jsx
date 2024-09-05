import React, { useEffect } from "react";
import { useState } from "react";
import {AnimatePresence,motion} from "framer-motion"



function Dropdown({users}) {
    const [rotate,setRotate]=useState(false)
    const [show,setShow]=useState(false)
    const [data,setData]=useState({})
    const userTypes=['Flagged Users','Normal Users']
    const containerVariants = {
        hidden: { opacity: 1, y: 0 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3
          }
        }
      };
  const handleClick=()=>{
    setRotate((prev)=>!prev)
    setShow((prev)=>!prev)

    }
   

    return (
    <div>
      <div className="flex justify-between rounded-xl  p-1 m-2">
      <div className="text-2xl font-semibold font-mono">
          {users}


      </div>
      <div onClick={handleClick} className={`ease-in duration-300 ${rotate?'rotate-0':'rotate-90'}`}>
        <img  src="./dropdown.png" alt="dropdown" width={50}/>
        
      </div>

      </div>
        <AnimatePresence>
      {
        show && (

            userTypes.map((data,index)=>(
            <div key={index}>
              
                <motion.div variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden">
               <h1>
                {data}
               </h1>
                {/* {console.log()} */}
            </motion.div>
            </div>))
        )
      }
      </AnimatePresence>
     

    </div>
  )
}

export default Dropdown