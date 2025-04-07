import { motion } from "framer-motion";

function Point() {
  return (
    <motion.div
      initial={{
        backgroundColor: "var(--color-light-tl)",
        borderColor: "var(--color-light-tl)",
      }}
      viewport={{ amount: 1, margin: "0px 0px -300px 0px" }}
      whileInView={{
        backgroundColor: "var(--color-deep-tl)",
        borderColor: "var(--color-deep-tl)",
        transition: { duration: 1 },
      }}
      className="w-3 h-3 rounded-lg border-2 absolute"
    ></motion.div>
  );
}
function Line() {
  return (
    <motion.div
      initial={{ backgroundColor: "var(--color-light-tl)" }}
      viewport={{ amount: 1, margin: "0px 0px -200px 0px" }}
      whileInView={{
        backgroundColor: "var(--color-deep-tl)",
        transition: { duration: 10 },
      }}
      className="w-0.5 h-[100px] absolute top-3"
    ></motion.div>
  );
}

export function Timeline() {
  return (
    <>
      <div className="absolute top-4">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>
      <div className="absolute top-[128px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[240px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[352px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[464px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
          <motion.div
            initial={{
              backgroundColor: "var(--color-light-tl)",
              borderColor: "var(--color-light-tl)",
            }}
            viewport={{ amount: 1, margin: "0px 0px -300px 0px" }}
            whileInView={{
              backgroundColor: "var(--color-deep-tl)",
              borderColor: "var(--color-deep-tl)",
              transition: { duration: 1 },
            }}
            className="w-3 h-3 rounded-lg border-2 absolute top-[110px]"
          ></motion.div>
        </div>
      </div>
    </>
  );
}
