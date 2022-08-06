import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative">
      <Image
        src="/logo-line.png"
        alt="online-learning"
        width={83}
        height={83}
        className=""
        objectFit="cover"
        objectPosition="center"
      ></Image>
      <span className="absolute top-0 left-0 translate-x-1/4 translate-y-1/2 font-bold text-primary text-3xl tracking-[4%] z-50">
        Skilline
      </span>
    </div>
  );
};

export default Logo;
