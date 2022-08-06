import Image from "next/image";
import { LogoModel } from "services/model";

const logos = [
  { src: "/logogoogle.png", alt: "Google", width: 168, height: 55 },
  { src: "/logonetflix.png", alt: "Nextflix", width: 152, height: 41 },
  { src: "/logoairbnb.png", alt: "airbnb", width: 161, height: 50 },
  { src: "/logoamazon.png", alt: "amazon", width: 154, height: 46 },
  { src: "/logofacebook.png", alt: "facebook", width: 194, height: 39 },
  { src: "/logograb.png", alt: "Grab", width: 131, height: 51 },
];

const CompanyLogo = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-6 md:gap-10 items-center">
      {logos?.map((item: LogoModel) => (
        <Image
          key={item.alt}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          objectFit="cover"
          objectPosition="center"
        ></Image>
      ))}
    </div>
  );
};

export default CompanyLogo;
