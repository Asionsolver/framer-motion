import { motion } from "framer-motion";

export default function KeyFrame() {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-4"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [1, 1.5, 1.7, 1.5, 1],
        backgroundColor: ["red", "white", "#0000ff", "#0000ff", "red"],
      }}
      transition={{
        duration: 2,
      }}
    ></motion.div>
  );
}
