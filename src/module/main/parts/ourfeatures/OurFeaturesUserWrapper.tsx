import OurFeaturesUserImage from "./OurFeaturesUserImage";
import OurFeaturesUser from "./OurFeaturesUser";

const OurFeaturesUserWrapper = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
      <OurFeaturesUserImage />
      <OurFeaturesUser />
    </div>
  );
};

export default OurFeaturesUserWrapper;
