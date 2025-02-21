"use client";

import NatureBackground from "@/public/timer-assets/wp6058956-4k-for-pc-wallpapers.jpg";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export default function TimerClockPage() {
  const [secondNumber, setSecondNumber] = useState(0);
  const [minuteNumber, setMinuteNumber] = useState(0);
  const [hourNumber, setSHourNumber] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  function startTimer() {}
  useEffect(() => {
    
  }, []);
  const timersCardClass =
    "border-[1px] w-[150px] h-[150px] border-neutral-300 rounded-md flex flex-col items-center justify-center text-white";
  return (
    <div
      className="w-[100%] h-[100vh]"
      style={{
        backgroundImage: `url(${NatureBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="timer-content-items flex flex-col items-center justify-center py-[100px]">
        <h1 className="font-bold text-2xl md:text-5xl text-center text-white">
          Parsa Shaabani Timer App
        </h1>
        <div className="flex items-center gap-x-[20px] mt-[50px] select-none">
          <div className={timersCardClass}>
            <h1 className="text-6xl">00</h1>
            <h2 className="text-md mt-[5px]">HOURS</h2>
          </div>
          <div className={timersCardClass}>
            <h1 className="text-6xl">00</h1>
            <h2 className="text-md mt-[5px]">MINUTES</h2>
          </div>
          <div className={timersCardClass}>
            <h1 className="text-6xl">{secondNumber}</h1>
            <h2 className="text-md mt-[5px]">SECONDS</h2>
          </div>
        </div>
        <div className="controllers-button flex items-center justify-center gap-x-[20px] mt-[40px]">
          <button
            onClick={() => {
              startTimer();
            }}
            className="px-3 py-2 flex items-center justify-center gap-x-2 text-lg bg-white border-[1px] border-white transition-all duration-200 rounded-md hover:bg-transparent hover:text-white"
          >
            Start Working
            <IoPlayOutline size={20} />
          </button>
          <button className="px-3 py-2 flex items-center justify-center gap-x-2 text-lg bg-white border-[1px] border-white transition-all duration-200 rounded-md hover:bg-transparent hover:text-white">
            Pause And Rest
            <CiPause1 size={20} />
          </button>
          <button className="px-3 py-2 flex items-center justify-center gap-x-2 text-lg text-red-600 bg-white border-[1px] border-white transition-all duration-200 rounded-md hover:bg-transparent hover:text-white">
            Reset Timer
            <CiPause1 size={20} />
          </button>
        </div>
        <div className="mt-[120px] flex items-center gap-x-[20px] text-white">
          <FaTelegram className="cursor-pointer" size={40} />
          <SiInstagram className="cursor-pointer" size={40} />
          <FaSquareXTwitter className="cursor-pointer" size={40} />
          <IoLogoYoutube className="cursor-pointer" size={40} />
        </div>
        <h1 className="mt-[20px] text-white font-thin text-md">
          Hello there, This project is creating with nextJs by{" "}
          <strong className="text-blue-400">ParsaShaabani</strong> from Iran
          Country
        </h1>
      </div>
    </div>
  );
}
