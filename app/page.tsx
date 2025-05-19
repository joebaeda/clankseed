"use client";

import { useEffect, useState } from "react";
import FarcasterLogo from "./components/farcaster";
import TwitterLogo from "./components/twitter";
import DexLogo from "./components/dex";
import Image from "next/image";

export default function Home() {
  const [time, setTime] = useState({
    day: "",
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dayName = now.toLocaleString("en-US", { weekday: "long" }); // e.g., "Mon" for "Monday"
      setTime({
        day: dayName,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#7454a9] to-[#040008]">
      <div className="w-full text-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row space-y-3 md:space-x-3 justify-center md:justify-between items-center">
          <Image
            src="/splash.png"
            width={200}
            height={200}
            alt="clankseed"
            priority
            className="w-50 h-50 object-center"
          />

          {/* Social Media Icons */}
          <div className="flex flex-row items-center space-x-12 my-3 md:mr-7">
            <a
              href="https://dexscreener.com/base/0xf6a5282e459defdc09333ef2ac9994fa27b8bb07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-colors"
              aria-label="clankseed token"
            >
              <DexLogo className="w-11 h-11" />
            </a>
            <a
              href="https://x.com/clankseed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-colors"
              aria-label="Follow us on X"
            >
              <TwitterLogo className="w-8 h-8" />
            </a>
            <a
              href="https://warpcast.com/clankseed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-colors"
              aria-label="Follow us on Farcaster"
            >
              <FarcasterLogo className="w-10 h-10" />
            </a>
          </div>
        </div>
        <p className="text-lg md:text-xl text-purple-200 my-6">
          We&apos;re working on something exciting! Stay tuned for our launch.
        </p>

        {/* Live Countdown */}
        <div className="max-w-3xl mx-auto">
          {/* Day Display */}
          <div className="bg-[#361d49] bg-opacity-50 rounded-lg p-4 md:p-6 mb-4">
            <div className="text-3xl md:text-5xl font-bold text-purple-300 capitalize">
              {time.day}
            </div>
          </div>

          {/* Hours, Minutes, Seconds in One Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { label: "Hours", value: time.hours },
              { label: "Minutes", value: time.minutes },
              { label: "Seconds", value: time.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#361d49] bg-opacity-50 rounded-lg p-4 md:p-6"
              >
                <div className="text-3xl md:text-5xl font-bold text-purple-300">
                  {item.value.toString().padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}