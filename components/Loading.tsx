"use client";

import Image from "next/image";


const Loading = () => {
 

  return (
    <div className="hero">
      <div className="flex-1 pt-[15em] padding-x">
        <h1 className="loading">
          Loading!
        </h1>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Loading;
