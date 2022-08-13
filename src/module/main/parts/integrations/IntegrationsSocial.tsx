import Image from "next/image";
import { IntegrationsSocialModel } from "services/model";

const socials = [
  {
    src: "/onedrive-img.png",
    alt: "OneDrive",
    width: 228,
    height: 195,
  },
  {
    src: "/dropbox-img.png",
    alt: "Dropbox",
    width: 130,
    height: 121,
  },
  {
    src: "/googledrive-img.png",
    alt: "GoogleDrive",
    width: 138,
    height: 135,
  },
  {
    src: "/googleteam-img.png",
    alt: "GoogleTeam",
    width: 159,
    height: 159,
  },
];

const IntegrationsSocial = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap  gap-10  md:gap-32 lg:gap-20 items-center justify-center">
      {socials?.map((item: IntegrationsSocialModel) => (
        <Image
          key={item.alt}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center"
        ></Image>
      ))}
    </div>
  );
};

export default IntegrationsSocial;
