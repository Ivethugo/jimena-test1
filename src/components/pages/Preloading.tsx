/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Butterfly from "../../assets/gifs/butterfly-animation.gif";
import { motion, AnimatePresence } from "framer-motion";
import { useOpenningTime } from "../../store/openning_time/useOpenningTime";
import ImageBackground from "../../assets/images/bg-purple-white.png";

export function Preloading() {
  const { setWelcome, setPreloading, preloading, timePreloading, timeWelcome } =
    useOpenningTime();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, timePreloading);
    const timer2 = setTimeout(() => {
      setWelcome(true);
    }, timeWelcome);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {preloading && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2 }}
            className="h-screen w-screen opacity-95 flex justify-center items-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ImageBackground})` }}
          >
            <div className="relative">
              <h1 className="name">{import.meta.env.VITE_FIRST_NAME}</h1>
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
