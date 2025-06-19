import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-red-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#e30613]/10 rounded-full blur-[150px]" />
      <div className="relative max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type:"spring", stiffness: 250 }}
            className="bg-[#e30613] text-white font-bold text-5xl px-6 py-4 rounded-xl shadow-md cursor-pointer mb-5"
          >
            DMI
          </motion.div>
          <div className="flex gap-1 mt-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: i === activeDot ? "#e30613" : "rgba(227, 6, 19, 0.3)",
                  scale: i === activeDot ? 1.2 : 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Design Made <span className="text-[#e30613]">Intelligent</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-600"
        >
          From brand kit to launch-ready content, websites & apps — powered by AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button whileHover={{ scale: 1.1 }} className="bg-[#e30613] hover:bg-[#c90011] transition text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            🚀 Try the Demo
          </motion.button>
          <motion.button whileHover={{ scale: 1.1, borderColor:'red', color:'red'}} className="bg-white hover:bg-gray-100 transition border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-full shadow">
            Join Waitlist →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
