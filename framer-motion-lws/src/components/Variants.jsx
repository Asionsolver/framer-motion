
import { motion } from 'framer-motion';


const shapeVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delay: 1,
            type: 'spring',
        }
    }
   
}

const childVariants = {
    initial: {
        scale: 0.5,
        
    },
    animate: {
        scale: 1.5,
        x: '40px',
        y: '40px',
        transition: {
            duration: 2,
            delay: 2,
            type: 'spring',
        }
    }

}

export const Variants = () => {
  return (
    <motion.div className='bg-green-700 w-32 h-32 rounded-md m-5' variants={shapeVariants} initial='initial' animate='animate'>
        <motion.div className='bg-red-500 w-12 h-12 rounded-full border ' variants={childVariants} ></motion.div>
    </motion.div>
  )
}
