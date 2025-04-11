'use client'
import React, { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'

const LayoutAnimation = () => {
    const [isOpen, setisOpen] = useState(true)

  return (
   <>
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            <AnimatePresence>
            {
                    isOpen && (
                        <m.button
                        layoutId='expandable'
                        initial = {{opacity: 0, scale: 0.9}}
                        animate={{ scale:1, opacity:1}}
                        exit={{ opacity: 0 , scale: 0.9}}
                        transition = {{ duration: 0.3}}
                        onClick={() => setisOpen(!isOpen)}
                        className='px-6 py-3 bg-white text-black rounded-lg shadow-md'>
                            Open Panel
                        </m.button>
                    )
            }
            {
                    !isOpen && (
                        <m.div
                        layoutId='expandable'
                        initial={{ opacity: 0, scale: 0.95}}
                        animate={{ opacity: 1 , scale: 1, y: -50}}
                        exit={{ opacity: 0 , scale: 0.95}}
                        transition={{
                            duration: 0.3
                        }}
                        className=" bg-white w-100 shadow-md rounded-md p-3 "
                        onClick={() => setisOpen(!isOpen)}>
                            <h2>Expanded Content</h2>
                            <p>This is the contet revealed after clicking the button. click anywhere to close</p>
                        </m.div>
                    )
            }
            </AnimatePresence>
        </div>
   </>
  )
}

export default LayoutAnimation