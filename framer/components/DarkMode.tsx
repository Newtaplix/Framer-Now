'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'


const BgAnimation: Variants = {
    Initial: {
        borderRadius: '100%'
    },
    Animate: {
        width: '100%',
        inset: 0,
        borderRadius: 0,
        margin: 0,
        transition: {
            duration: 5
        }
    },
    exit: {
        width: 0,
        height: 0,
        borderRadius: '100%',
        transition: {
            duration: 3
        }
    }
}

const DarkMode = () => {
    const [isOpen, setisOpen ] = useState(false)
  return (
   <div className='h-screen pt-3 relative justify-center flex'>
        <div className='flex w-1/2 py-2 px-1 rounded-full z-10 bg-white border border-gray-300 h-fit shadow-md mx-auto justify-end'>
            <m.div className='flex justify-start w-15 rounded-full h-8 bg-gray-200'>
                <m.div onClick={() => setisOpen(!isOpen)} className='rounded-full h-8 w-8 bg-white/60'>

                </m.div>
            </m.div>
        </div>
       {
            isOpen && (
               <AnimatePresence mode='wait'>
                     <m.div 
                        variants={BgAnimation}
                        initial= "Initial"
                        animate="Animate"
                        exit="exit"

                        className='flex w-1/2 bg-black py-5 rounded-full absolute m-auto top-0 my-5'>

                        </m.div>
               </AnimatePresence>
            )
       }
   </div>
  )
}

export default DarkMode