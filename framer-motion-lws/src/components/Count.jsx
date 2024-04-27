import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const Count = () => {
    const count = useMotionValue(0);
    const roundedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, {duration: 1});
        return animation.stop;
    }
    , [count]);
  return (
    <motion.div>{roundedValue}</motion.div>
  )
}


