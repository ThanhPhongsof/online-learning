import { NewsBoxSmallModel } from "services/model";
import NewsBoxBage from "./NewsBoxBage";
import NewsBoxDesc from "./NewsBoxDesc";
import NewsBoxHeading from "./NewsBoxHeading";
import NewsBoxImage from "./NewsBoxImage";

type NewsBoxSmallProps = {
  item: NewsBoxSmallModel;
};

const NewsBoxSmall = ({ item }: NewsBoxSmallProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 xl:gap-x-0 gap-y-5">
      <div className="basis-full md:basis-1/3 lg:basis-1/2">
        <NewsBoxImage
          src={item.src}
          alt="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
        />
      </div>
      <div className="basis-full md:basis-2/3 lg:basis-1/2">
        <div className="flex flex-col">
          <NewsBoxBage className="max-w-max mb-2">{item.bagde}</NewsBoxBage>
          <NewsBoxHeading className="mb-2 !text-base">
            {item.heading}
          </NewsBoxHeading>
          <NewsBoxDesc className="text-sm xl:text-base">
            {item.desc}
          </NewsBoxDesc>
        </div>
      </div>
    </div>
  );
};

export default NewsBoxSmall;
