import Butterfly from "../../assets/gifs/butterfly-animation.gif";
import { motion, AnimatePresence } from "framer-motion";
import { useOpenningTime } from "../../store/openning_time/useOpenningTime";
import ImageBackground from "../../assets/images/bg-purple-white.png";
import { useEffect } from "react";

export function Preloading() {
  const { preloading, setPreloading, timePreloading } = useOpenningTime();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, timePreloading);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <AnimatePresence>
        {preloading && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2 }}
            className="h-screen w-screen opacity-95 flex justify-center items-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ImageBackground})` }}
          >
            <div className="relative">
              <h1 className="name-preloader">
                {import.meta.env.VITE_FIRST_NAME}
              </h1>
              <img
                className="h-16 w-16 absolute  -top-7 right-1"
                src={Butterfly}
                alt="Butterfly Animation"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
