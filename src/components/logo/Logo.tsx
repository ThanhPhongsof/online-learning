import Image from "next/image";
import classNames from "utils/classNames";

type LogoProps = {
  className?: string;
};

const Logo = ({ className = "text-primary" }: LogoProps) => {
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
      <span
        className={classNames(
          "absolute top-0 left-0 translate-x-1/4 translate-y-1/2 font-bold text-3xl tracking-[4%] z-50",
          className
        )}
      >
        Skilline
      </span>
    </div>
  );
};

export default Logo;
