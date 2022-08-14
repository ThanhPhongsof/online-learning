import { LayoutContainer } from "components/layout";
import { NewsBoxSmallModel } from "services/model";
import {
  NewsBoxLarge,
  NewsBoxSmall,
  NewsDesc,
  NewsHeading,
} from "./parts/news";

const newsBoxSmalls = [
  {
    bagde: "press release",
    heading:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    desc: "Class Technologies Inc., the company that created Class,...",
    src: "/news-img-02.png",
  },
  {
    bagde: "news",
    heading:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    desc: "Zoom was never created to be a consumer product. Nonetheless, the...",
    src: "/news-img-03.png",
  },
  {
    bagde: "news",
    heading:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    desc: "This year, investors have reaped big financial returns from betting on Zoom...",
    src: "/news-img-04.png",
  },
];

const News = () => {
  return (
    <section className="news">
      <LayoutContainer>
        <div className="flex flex-col items-center">
          <NewsHeading />
          <NewsDesc />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
          <div className="basis-full lg:basis-[40%] xl:basis-1/3">
            <NewsBoxLarge />
          </div>
          <div className="basis-full lg:basis-[60%] xl:basis-2/3">
            <div className="flex flex-col items-start gap-2">
              {newsBoxSmalls?.map((item: NewsBoxSmallModel) => (
                <NewsBoxSmall key={item.heading} item={item} />
              ))}
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default News;
