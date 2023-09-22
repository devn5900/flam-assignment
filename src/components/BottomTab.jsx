import React, { useEffect, useRef, useState } from 'react'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';


const BottomTab = () => {
    const [height,setHeight]= useState(15);
    const [pointer,setPointer]= useState(false)
    const [drag,setDrag]= useState(false);
    const [pageY,setPageY]= useState(0)
    const ih=window.innerHeight
    const refH= useRef(height);
    const { scrollXProgress } = useScroll();
    const scaleY = useSpring(scrollXProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    const handleDragBtn=(e)=>{
        if(!drag)return;
        const deltaY = pageY - e.pageY; 
        let nh = height + deltaY;
        const minHeight = 10;
        const maxHeight = 98;
        nh = Math.min(Math.max(nh, minHeight), maxHeight);
            setHeight(nh);
            refH.current = nh;
            setPageY(e.pageY);

    }
    const handleDragDown=(e)=>{
        setDrag(true);
        setPointer(true);
        setPageY(e.pageY)
    }
    const handleDragUp=(e)=>{
        setDrag(false)
        setHeight(refH.current);

    }
    return (
        <MotionConfig transition={{duration:0.7}}>
        <motion.div   className={`${pointer?"pointer-events-auto":"pointer-events-none"}    transition-all duration-100 ease z-100  fixed top-0 left-0 w-full h-full flex items-center justify-end flex-col`}>
          <div className='bg-gray-500 fixed z-10 opacity-[0.5] h-full w-full'></div>
           <motion.div
           initial={{height:'20vh'}}
        //    transition={{delay:0.1}}
           animate={{height:`${height}%`}}
            className=' fixed z-50 transition-all  duration-150 ease  px-4 py-3 lg:w-1/2 md:w-[50%] sm:w-[60%] rounded-tl-3xl rounded-tr-3xl bg-white'>
           <div onMouseMove={handleDragBtn} onMouseUp={handleDragUp} onMouseDown={handleDragDown }  className=' pointer-events-auto w-full flex justify-center cursor-grab  p-8'>
                <span   className='w-[5rem] h-[5px] rounded-full  bg-gray-300 '> </span>
            </div>
           
            <div  className='  overflow-y-auto h-full scrollbar  '>
                <h1 className='text-5xl font-extrabold text-center pt-10'>Flam's Assignment</h1>
            </div>
           </motion.div>
        </motion.div>
        </MotionConfig>

    )
}

export default BottomTab