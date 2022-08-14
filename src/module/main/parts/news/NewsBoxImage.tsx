import Image from "next/image";
import classNames from "utils/classNames";

type NewsBoxImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const NewsBoxImage = ({
  src,
  alt,
  width = 337,
  height = 200,
  className = "",
}: NewsBoxImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="intrinsic"
      objectFit="cover"
      objectPosition="center"
      className={classNames(
        "rounded-[20px] bg-opacity-10 overflow-hidden",
        className
      )}
    ></Image>
  );
};

export default NewsBoxImage;
