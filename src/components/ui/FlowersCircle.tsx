import FlowersCircleImage from "../../assets/images/flowers-circle.png";

export function FlowersCircle() {
  return (
    <>
      <div className="w-[360px] h-[500px] flex flex-col justify-center items-center relative">
        <img src={FlowersCircleImage} alt="FlowersCircleImage" />
        <div className="absolute top-30 font-lora font-semibold text-deep-primary">
          {import.meta.env.VITE_EVENT_NAME}
        </div>
        <div className="absolute top-40 pr-10 font-monteCarlo text-6xl text-deep-primary">
          {import.meta.env.VITE_FIRST_NAME}
        </div>
        <div className="absolute top-53 pt-10 font-lora font-semibold text-deep-primary">
          {import.meta.env.VITE_DATE_STRING}
        </div>
      </div>
    </>
  );
}
