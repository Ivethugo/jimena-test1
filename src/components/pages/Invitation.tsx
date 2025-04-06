import { useOpenningTime } from "../../store/openning_time/useOpenningTime";
import {
  Attendee,
  Begin,
  Introduce,
  Navbar,
  Place,
  Scheduler,
  End,
} from "../index.ts";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Butterfly from "../../assets/gifs/butterfly-animation.gif";

export function Invitation() {
  const { invitation } = useOpenningTime();
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {invitation && (
        <div className="w-screen h-screen flex flex-col overflow-y-auto relative">
          <motion.div
            animate={{
              x: [10, 50, 200, 90, 100],
              y: [
                0, 100, 25, 200, 300, 400, 500, 600, 100, 700, 75, 25, 50, 0,
                200, 150,
              ],
              rotate: [
                0, 180, 360, 180, 0, 180, 360, 180, 0, 180, 360, 180, 0, 180,
                360, 180, 0,
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 50,
            }}
            style={{
              top: Math.min(32 + scrollY * 0.2, window.innerHeight - 150), // Reducir velocidad y límite inferior
              right: Math.min(
                Math.max(30, windowWidth * 0.65), // 15% mínimo desde la derecha
                windowWidth * 0.85 // 15% máximo desde la izquierda (85% desde derecha)
              ),
            }}
            className="fixed z-50"
          >
            <img
              alt="Animated Butterfly "
              src={Butterfly}
              className="w-24 h-24"
            />
          </motion.div>
          <div className="sticky top-0 z-50 w-full bg-white shadow-md">
            <Navbar />
          </div>
          <div>
            <Begin />
          </div>
          <div>
            <Introduce />
          </div>
          <div>
            <Place />
          </div>
          <div>
            <Scheduler />
          </div>
          <div>
            <Attendee />
          </div>
          <div>
            <End />
          </div>
        </div>
      )}
    </>
  );
}
