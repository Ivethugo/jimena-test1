import { JSX, useEffect, useState } from "react";

export function Countdown(): JSX.Element {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(import.meta.env.VITE_DATE);
    const difference = +targetDate - +now;
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Approximate days in a month
      timeLeft = {
        days: days,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const nameDateClass = "text-[16px] ";
  const divDateClass =
    "font-josefinSlab font-[10px] font-semibold text-deep-primary flex flex-col justify-center items-center ";

  return (
    <div className="flex flex-col justify-center items-center gap-10 relative">
      {timeLeft && (
        <div className="flex flex-row justify-center items-center gap-3 text-2xl">
          <div className={divDateClass}>
            <div>{timeLeft.days}</div>
            <div className={nameDateClass}>Días</div>
          </div>
          <div className="text-deep-primary">:</div>
          <div className={divDateClass}>
            <div>{timeLeft.hours}</div>
            <div className={nameDateClass}>Horas</div>
          </div>
          <div className="text-deep-primary">:</div>
          <div className={divDateClass}>
            <div>{timeLeft.minutes}</div>
            <div className={nameDateClass}>Minutos</div>
          </div>
          <div className="text-deep-primary">:</div>
          <div className={divDateClass}>
            <div>{timeLeft.seconds}</div>
            <div className={nameDateClass}>Segundos</div>
          </div>
        </div>
      )}
    </div>
  );
}
