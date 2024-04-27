import { motion } from "framer-motion";

export const Button = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-2 rounded-sm m-2 border"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Tap Me
      </motion.button>
      <motion.button
        className="bg-black text-white p-2 rounded-sm m-2 border"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.5,
          transition: { duration: 1, yoyo: Infinity },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};
