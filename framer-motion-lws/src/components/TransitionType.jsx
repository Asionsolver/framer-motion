import { motion } from "framer-motion";

export const TransitionType = () => {
  return (
    <motion.div>
      <motion.h1>Transition Type</motion.h1>
      <motion.p>
        Transition type is a property that allows you to specify how the
        transition should behave. The default value is ease. Other possible
        values are:
      </motion.p>
      <ul className="p-4 m-4">
        <motion.li
          className="m-4 text-2xl"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2 }}
        >
          Tween
        </motion.li>
        <motion.li
          className="m-4 text-2xl"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ type: "spring", duration: 2 }}
        >
          Spring
        </motion.li>
        <motion.li
          className="m-4 text-2xl"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ type: "spring", bounce: 0.7, duration: 2 }}
        >
          Spring with bounce
        </motion.li>
        <motion.li
          className="m-4 text-2xl"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }}
        >
          Inertia
        </motion.li>
      </ul>
    </motion.div>
  );
};
