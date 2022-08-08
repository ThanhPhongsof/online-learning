import classNames from "utils/classNames";
import OurFeaturesBoxChild from "./OurFeaturesBoxChild";
import OurFeaturesBoxImage from "./OurFeaturesBoxImage";
import OurFeaturesLayout from "./OurFeaturesLayout";

type OurFeaturesBoxProps = {
  kind: boolean;
  src: string;
  children: JSX.Element;
};

const OurFeaturesBox = ({ kind, src = "", children }: OurFeaturesBoxProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col-reverse items-center gap-14 md:gap-20 mb-20",
        kind ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <OurFeaturesLayout>
        <OurFeaturesBoxChild>{children}</OurFeaturesBoxChild>
      </OurFeaturesLayout>
      <OurFeaturesLayout>
        <OurFeaturesBoxImage src={src} />
      </OurFeaturesLayout>
    </div>
  );
};

export default OurFeaturesBox;
