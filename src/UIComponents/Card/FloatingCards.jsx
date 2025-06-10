import { motion } from "framer-motion";

function FloatingCards() {
  const items = [
    {
      user: "@nikhil",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum quo vitae dolore pariatur cum illum dignissimos.",
      color: "text-red-400",
    },
    {
      user: "@ankit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum quo vitae dolore pariatur cum illum dignissimos dicta.",
      color: "text-yellow-400",
    },
    {
      user: "@sandeep",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum quo vitae dolore pariatur cum illum dignissimos dicta",
      color: "text-blue-400",
    },
    {
      user: "@mihir",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum quo vitae dolore pariatur cum illum dignissimos dicta.",
      color: "text-green-400",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden mt-8">
      <h2 className="text-white text-xl font-semibold mb-4">
        Some of our user thoughts
      </h2>
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => {
          const userClass = item.color + " font-semibold";
          return (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-xl min-w-[280px] flex flex-col items-start"
            >
              <span className={userClass}>{item.user}</span>
              <p className="text-gray-300 mt-1">{item.text}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default FloatingCards;
