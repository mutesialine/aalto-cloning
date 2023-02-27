"use client";
import Image from "next/image";
import Data from "data/HeroData";
import { useState } from "react";
export default function Hero() {
  const [img, setImage] = useState(0);
  function getImageForward() {
    if (img < Data.length-1) setImage((prevImg) => prevImg + 1);
  }


  function getImageBackWard() {
     if (img >= Data.length-1 ) setImage((prevImg) => prevImg - 1);
  }
  return (
    <div className="w-full relative">
      <div className="flex relative">
        <Image
          src={Data[img].pic}
          alt={Data[img].name}
          width={Data[img].width}
          height={Data[img].height}
          className="w-full"
        />
      </div>
      <div className="bg-black text-white py-4 px-6 w-[500px] absolute -bottom-10 left-10">
        <h2>Join us in supporting Ukraine’s university students</h2>
        <p>Donations help them continue their studies during the crisis</p>
        <div className="flex gap-x-8 px-16">
          <button onClick={getImageBackWard}>Backward</button>
          <button onClick={getImageForward} className="p-4">
            forward{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
