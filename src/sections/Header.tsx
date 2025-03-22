'use client';
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="flex justify-center z-10 w-full absolute top-3 items-center">
      <nav className="flex justify-between items-center p-0.5 w-[95%] rounded border bg-black/15 backdrop-blur border-black/10">
        <p className="text-black text-center p-2 text-sm">
      DEVELOPER OF THE FUTURE
  </p>      
  <p className="text-black text-center p-2 text-sm">
      TALHA UMAR
  </p>   
      </nav>
    </div>
  );
};
