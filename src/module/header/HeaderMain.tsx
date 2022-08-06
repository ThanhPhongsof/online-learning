import HeaderContent from "./HeaderContent";
import HeaderImage from "./HeaderImage";

const HeaderMain = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-14">
      <HeaderContent></HeaderContent>
      <HeaderImage></HeaderImage>
    </div>
  );
};

export default HeaderMain;
