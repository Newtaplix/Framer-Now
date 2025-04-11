'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, Variants} from 'framer-motion'


const popAnimation: Variants = {
    initial: {  opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 }, 
    exit: {scale: 0, opacity: 0 },
  };

const PopAnimation = () => {
    const [isOpen, setisOpen] = useState<boolean>(true)
  return (
    <div className="flex items-center justify-center w-[75%] rounded-lg mx-auto h-screen flex-col">
        {
            isOpen ? (
              <AnimatePresence>    
                    <motion.div 
                        variants={popAnimation} 
                        animate="animate"
                        initial="initial"
                        exit="exit" 
                        >
                            <div className='h-29 w-72 bg-blue-400 rounded-lg shadow-lg flex items-center justify-center'>
                                <p>This is a crazy pop up</p>
                            </div>

                        </motion.div>
              </AnimatePresence>
            ) : null
          }
        <motion.button initial={{ y: 0}} animate={{ y: 0}} className=' py-3 px-2 rounded-lg mt-2 bg-black text-white cursor-pointer transition-all' onClick={() => setisOpen(!isOpen)}>Toggle</motion.button>       
    </div>
  )
}

export default PopAnimation