import { motion } from "framer-motion";

export const TextMotion = () => {
  const message =
    "We are enjoying Framer Motion. I love this animation library. 🎉🎉🎉";
  const wordArray = message.split(" ");
  return (
    <div className="text-3xl m-4 text-center">
      {wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundColor: "yellow",
            color: "navy",
            padding: "2px",
            margin: "2px",
            borderRadius: "5px",
            border: "1px solid black",
            display: "inline-block",
          }}
          transition={{ delay: index / 5, duration: 1 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};
