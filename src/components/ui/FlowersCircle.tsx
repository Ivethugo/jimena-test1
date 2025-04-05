import FlowersCircleImage from "../../assets/images/flowers-circle.png";

export function FlowersCircle() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center relative">
        <img src={FlowersCircleImage} alt="FlowersCircleImage" />
        <div className="absolute top-35 font-lora text-deep-primary">
          {import.meta.env.VITE_EVENT_NAME}
        </div>
        <div className="absolute top-45 pr-10 font-monteCarlo text-7xl text-deep-primary">
          {import.meta.env.VITE_FIRST_NAME}
        </div>
        <div className="absolute pt-10 text-deep-primary font-lora">
          {import.meta.env.VITE_DATE_STRING}
        </div>
      </div>
    </div>
  );
}
