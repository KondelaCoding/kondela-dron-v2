"use client";

import Image from "next/image";
import Drone from "../img/drone.png";
import Button from "./Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div id="start" className="flex flex-col items-center justify-center relative pt-20 overflow-hidden">
      <div className="relative w-full flex justify-center items-center flex-grow lg:scale-150">
        <h1
          className={`text-[150px] font-black text-[color:var(--lightgray-color)] absolute duration-500 delay-200 ${
            isMounted ? "top-0 opacity-40" : "top-10 opacity-0"
          }`}
        >
          Dron
        </h1>
        <Image
          src={Drone}
          alt="dron"
          width={300}
          className={`absolute drop-shadow-[0_0_20px_rgba(0,0,0,0.7)] duration-500 delay-100 ${
            isMounted ? "top-10 opacity-100" : "top-20 opacity-0"
          }`}
        />
      </div>
      <div
        className={`flex flex-col items-center justify-start flex-grow gap-5 mt-80 duration-500 lg:mt-[400px] ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl tracking-tighter">Twój świat z innej perspektywy</h2>
        <p className="text-[color:var(--lightgray-color)] text-center text-xl font-light mb-5">
          Profesjonalne filmowanie dronem dla Ciebie!
        </p>
        <Button />
        {/* fotografia filmowanie inspiracja */}
      </div>
    </div>
  );
};

export default Hero;
