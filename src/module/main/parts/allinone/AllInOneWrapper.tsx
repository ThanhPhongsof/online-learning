import { AllInOneWrapperModel } from "services/model";
import AllInOneDesc from "./AllInOneDesc";
import AllInOneHeading from "./AllInOneHeading";
import AllInOneIcon from "./AllInOneIcon";

type AllInOneWrapperProps = {
  item: AllInOneWrapperModel;
};

const AllInOneWrapper = ({ item }: AllInOneWrapperProps) => {
  return (
    <div className="flex flex-col items-center text-center shadow-lg pt-0 px-2 lg:px-5 pb-12 rounded-3xl bg-white">
      <AllInOneIcon iconColor={item.iconColor}>{item.icon}</AllInOneIcon>
      <AllInOneHeading>{item.heading}</AllInOneHeading>
      <AllInOneDesc>{item.desc}</AllInOneDesc>
    </div>
  );
};

export default AllInOneWrapper;
