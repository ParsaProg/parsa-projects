"use client";

import NatureBackground from "@/public/timer-assets/wp6058956-4k-for-pc-wallpapers.jpg";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useEffect, useState } from "react";

export default function TimerClockPage() {
  const [isActive, setIsActive] = useState(false);
  const [secondNumber, setSecondNumber] = useState(0);
  const [minuteNumber, setMinuteNumber] = useState(0);
  const [hourNumber, setHourNumber] = useState(0);
  function startTimer() {
    setIsActive(true);
  }
  function PauseTimer() {
    setIsActive(false);
  }

  function resetTimer() {
    setIsActive(false);
    setSecondNumber(0);
    setMinuteNumber(0);
    setHourNumber(0);
  }

  useEffect(() => {
    let maininterval = undefined;
    if (isActive) {
      maininterval = setInterval(() => {
        setSecondNumber((prevSecondNumber) => {
          const newSecondNumber = prevSecondNumber + 1;
          if (newSecondNumber === 60) {
            setMinuteNumber((prevMinuteNumber) => {
              const newMinuteNumber = prevMinuteNumber + 0.5;
              if (newMinuteNumber === 60) {
                setMinuteNumber(0);
                setHourNumber((prevHourNumber) => prevHourNumber + 0.5);
              }
              return newMinuteNumber;
            });
            return 0;
          }
          return newSecondNumber;
        });
      }, 1000);
    } return () => clearInterval(maininterval);
  }, [isActive]);
  const timersCardClass =
    "border-[1px] sm:w-[150px] sm:h-[150px] transition-all duration-200 w-[80px] h-[80px] border-neutral-300 rounded-md flex flex-col items-center justify-center text-white";
  return (
    <div
      className="w-[100%] h-[100vh]"
      style={{
        overflow: "hidden",
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
        <div className="flex items-center gap-x-[20px] sm:mt-[50px] mt-[20px] select-none">
          <div className={timersCardClass}>
            <h1 className="sm:text-6xl text-2xl">
              {hourNumber < 10 ? `0${hourNumber}` : hourNumber}
            </h1>
            <h2 className="sm:text-md text-sm sm:mt-[5px] mt-1">HOURS</h2>
          </div>
          <div className={timersCardClass}>
            <h1 className="sm:text-6xl text-2xl">
              {minuteNumber < 10 ? `0${minuteNumber}` : minuteNumber}
            </h1>
            <h2 className="sm:text-md text-sm sm:mt-[5px] mt-1">MINUTES</h2>
          </div>
          <div className={timersCardClass}>
            <h1 className="sm:text-6xl text-2xl">
              {secondNumber < 10 ? `0${secondNumber}` : secondNumber}
            </h1>
            <h2 className="sm:text-md text-sm sm:mt-[5px] mt-1">SECONDS</h2>
          </div>
        </div>
        <div className="controllers-button flex sm:flex-row flex-col gap-y-5 items-center justify-center gap-x-[20px] sm:mt-[40px] mt-[30px]">
          <button
            onClick={() => {
              startTimer();
            }}
            className="w-[100%] sm:w-[auto] px-3 py-2 flex items-center justify-center gap-x-2 text-lg bg-white border-[1px] border-white text-black transition-all duration-200 rounded-md hover:bg-transparent hover:text-white"
          >
            Start Working
            <IoPlayOutline size={20} />
          </button>
          <button
            onClick={() => {
              PauseTimer();
            }}
            className="w-[100%] sm:w-[auto] px-3 py-2 flex items-center justify-center gap-x-2 text-lg bg-white border-[1px] text-black border-white transition-all duration-200 rounded-md hover:bg-transparent hover:text-white"
          >
            Pause And Rest
            <CiPause1 size={20} />
          </button>
          <button
            onClick={() => {
              resetTimer();
            }}
            className="w-[100%] sm:w-[auto] px-3 py-2 flex items-center justify-center gap-x-2 text-lg text-red-600 bg-white border-[1px] border-white transition-all duration-200 rounded-md hover:bg-transparent hover:text-white"
          >
            Reset Timer
            <CiPause1 size={20} />
          </button>
        </div>
        <div className="sm:mt-[120px] mt-[80px] flex items-center gap-x-[20px] text-white">
          <FaTelegram
            onClick={() => window.open("https://t.me/Parsa_Shaabani", "_blank")}
            className="cursor-pointer"
            size={40}
          />
          <SiInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/parsa._.shaabani/?hl=en",
                "_blank"
              )
            }
            className="cursor-pointer"
            size={40}
          />
          <FaSquareXTwitter className="cursor-pointer" size={40} />
          <IoLogoYoutube
            onClick={() =>
              window.open("https://www.youtube.com/@prshProg", "_blank")
            }
            className="cursor-pointer"
            size={40}
          />
        </div>
        <h1 className="text-center sm:px-0 px-5 mt-[20px] text-white font-thin text-md">
          Hello there, This project is creating with nextJs by{" "}
          <strong className="text-blue-400">ParsaShaabani</strong> from Iran
          Country
        </h1>
      </div>
    </div>
  );
}
