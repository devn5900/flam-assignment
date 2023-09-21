import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';


const BottomTab = () => {
  const [isOpen,setIsOpen]= useState(false);
    const [height,setHeight]= useState("");
    const [isSelect,setIsSelect]= useState(false);
    const handleDrag=(e)=>{
        console.log(e.clientY,window.innerHeight)
        if(isSelect){
            if(e.clientY>0&&e.clientY<(window.innerHeight-60)){
                setHeight(e.clientY);
            }
        }
    }
    const handleDragBtn=()=>{
        setIsSelect(true);
    }
    const handleLeaveBtn=()=>{
        setIsSelect(true);
    }
    useEffect(()=>{
        setHeight(window.innerHeight-60)
    },[isOpen])
  return (
    <div className=' overflow-hidden'>
 

    <motion.div draggable={true} onDrag={handleDrag} 
    style={{
        top:height,
        transition:"all 0.5s ease",
    }}  
    className={` absolute  rounded-tl-3xl rounded-tr-3xl transition-all duration-150   p-3  h-full  w-full border-t-4 bg-white  border-pink-500 `}>
        <div onMouseOver={handleDragBtn}  onMouseLeave={handleLeaveBtn} className='w-[25%] cursor-move hover:cursor-move m-auto bg-gray-300  h-2 rounded-full '>
            <span></span>
        </div>
        <div className='text-4xl font-extrabold text-center font-sans break-words pt-12 '>
           Flam Bottom Sheet Assignment
        </div>
    </motion.div>
    
    </div>
  )
}

export default BottomTab