/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-32 h-32 border rounded-sm bg-pink-300 text-black m-4 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1}}}
      viewport={{once: true}}
    >
      {text}
    </motion.div>
  );
};

export const ScrollReveal = () => {
  const greeting = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Namaste",
    "Konnichiwa",
    "Ni Hao",
    "Hallo",
    "Merhaba",
    "Salam",
  ];
  return (
    <div>
      {greeting.map((greeting, index) => {
        return <Box key={index} text={greeting} />;
      })}
    </div>
  );
};
