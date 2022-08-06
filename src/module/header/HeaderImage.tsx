import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className="">
      <Image
        src="/header-pic.png"
        width={911}
        height={892}
        alt=""
        layout="intrinsic"
        objectFit="cover"
        quality={100}
      ></Image>
    </div>
  );
};

export default HeaderImage;
