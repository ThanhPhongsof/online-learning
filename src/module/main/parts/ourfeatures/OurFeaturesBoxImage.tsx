import Image from "next/image";

type OurFeaturesBoxImageProps = {
  src: string;
};

const OurFeaturesBoxImage = ({ src }: OurFeaturesBoxImageProps) => {
  return (
    <Image
      src={src}
      alt="box"
      width={550}
      height={500}
      layout="intrinsic"
      objectFit="cover"
      objectPosition="center"
    ></Image>
  );
};

export default OurFeaturesBoxImage;
