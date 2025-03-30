import Envleft from "../../assets/images/env_left.png";
import Envright from "../../assets/images/env_right.png";
import OpenButton from "../../assets/images/open_button.png";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useOpenningTime } from "../../store/openning_time/useOpenningTime";

export function Welcome() {
  const control = useAnimationControls();
  const { setInvitation } = useOpenningTime();

  const handleAnimation = () => {
    control.start("move");
    setTimeout(() => {
      setInvitation(true);
    }, 500);
  };

  const left = { x: [0, -2000], transition: { duration: 2.5 } };
  const right = { x: [0, 2000], transition: { duration: 2.5 } };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-screen h-screen relative flex justify-center items-center"
        >
          <motion.img
            variants={{ move: left }}
            animate={control}
            className="w-screen h-screen absolute"
            src={Envleft}
            alt="Envelope Left"
          />

          <motion.img
            variants={{ move: right }}
            animate={control}
            className="w-screen h-screen absolute"
            src={Envright}
            alt="Envelope Right"
          />

          <motion.div
            variants={{ move: right }}
            animate={control}
            className="w-[200px] h-[50px] absolute"
          >
            <motion.button
              animate={{ scale: 1.1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
              className="w-full h-full relative cursor-pointer"
              onClick={() => {
                handleAnimation();
              }}
            >
              <img
                className="w-full h-full absolute top-0 left-0"
                src={OpenButton}
                alt="Open Button"
              />
              <h1 className="w-full h-full absolute -top-0 font-monteCarlo text-5xl text-secondary">
                Open
              </h1>
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
