"use client";

import { useState, useEffect } from "react";

const Scrollbar = () => {
  const [distanceScrolled, setDistanceScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 90;
      setDistanceScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden fixed top-80 -right-36 items-center gap-5 rotate-90 z-50 md:inline-flex">
      <p className="drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)]">Zobacz więcej</p>
      <div className="relative">
        <div className="h-[1px] w-32 bg-white drop-shadow-[0_0_1px_rgba(0,0,0,1)]"></div>
        <div
          className="absolute w-5 h-5 bg-white rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 drop-shadow-[0_0_1px_rgba(0,0,0,1)]"
          style={{ left: `${distanceScrolled}%` }}
        ></div>
      </div>
      <p className="drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)]">Zobacz więcej</p>
    </div>
  );
};

export default Scrollbar;
