import Image from "next/image";
import OurFeaturesLayout from "./OurFeaturesLayout";

const OurFeaturesUserImage = () => {
  return (
    <OurFeaturesLayout>
      <Image
        src="/features-img-user.png"
        alt="you can"
        width="700"
        height="450"
        layout="intrinsic"
        objectFit="cover"
        objectPosition="center"
      ></Image>
    </OurFeaturesLayout>
  );
};

export default OurFeaturesUserImage;
