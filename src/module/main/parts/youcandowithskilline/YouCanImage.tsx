import Image from "next/image";

const YouCanImage = () => {
  return (
    <div className="basis-full lg:basis-1/2">
      <Image
        src="/youcan-img.png"
        alt="you can"
        width="550"
        height="400"
        layout="intrinsic"
        objectFit="cover"
        objectPosition="center"
        className="rounded-2xl"
      ></Image>
    </div>
  );
};

export default YouCanImage;
