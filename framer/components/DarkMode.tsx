'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'


const BgAnimation: Variants = {
   
}

const DarkMode = () => {
    const [isOpen, setisOpen ] = useState(false)
  return (
   <div className='h-[75%] w-[80%] pt-3 justify-center relative flex'>
        <div className='flex w-1/2 py-2 px-1 z-10 rounded-full bg-white border border-gray-300 h-fit shadow-md mx-auto justify-end'>
            <m.div className='flex w-15 rounded-full px-1 h-8 bg-gray-200 py-1'
                style={{ 
                    justifyContent: 'flex-' + (isOpen ? "end" : "start")                  
                }}
            >
                <m.div
                layout
                transition={{
                    type: 'spring',
                    bounce: 0.2,
                    visualDuration: 0.2
                }} 
                onClick={() => setisOpen(!isOpen)} className='rounded-full w-[50%] bg-white/60 cursor-pointer'>

                </m.div>
            </m.div>
        </div>
        <AnimatePresence mode='wait'>
            {
                    isOpen && (
                    
                            <m.div 
                                variants={BgAnimation}
                                layout
                                initial="Initial"
                                animate="Animate"
                                exit="exit"
                                transition={{
                                    duration: 0.5,
                                    ease: "linear"
                                }}

                                className=' flex w-1/2 bg-black py-5 rounded-full absolute m-auto top-0 my-7'>

                                </m.div>
                    )
            }
        </AnimatePresence>
   </div>
  )
}

export default DarkMode