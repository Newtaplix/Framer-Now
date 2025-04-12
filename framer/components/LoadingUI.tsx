'use client' 
import React from 'react'
import { motion, Variants } from 'framer-motion'


const Loading: Variants = {
    animate: {
        y: -2,
        transition: {
            duration: 2
        }
    },
    initial: {
        y: 0
    }
}

const LoadingUI = () => {
  return (
    <div>
        <motion.div className="flex gap-2">
            <motion.div
            variants={Loading}
            initial="initial"
            animate='animate'
             className="w-4 h-4 rounded-full bg-black"/>
            <motion.div
             variants={Loading}
             initial="initial"
             animate='animate' 
            className="w-4 h-4 rounded-full bg-black"/>
            <motion.div
             variants={Loading}
             initial="initial"
             animate='animate'
             className="w-4 h-4 rounded-full bg-black"/>
        </motion.div>
    </div>
  )
}

export default LoadingUI