import Link from "next/link";
import NewsBoxBage from "./NewsBoxBage";
import NewsBoxDesc from "./NewsBoxDesc";
import NewsBoxHeading from "./NewsBoxHeading";
import NewsBoxImage from "./NewsBoxImage";

const NewsBoxLarge = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-5">
        <NewsBoxImage
          src="/news-img-01.png"
          alt="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
          width={640}
          height={340}
        ></NewsBoxImage>
      </div>
      <NewsBoxBage className="mb-5" />
      <NewsBoxHeading className="mb-5 leading-[1.5] xl:w-[560px]">
        Class adds $30 million to its balance sheet for a Zoom-friendly edtech
        solution
      </NewsBoxHeading>
      <NewsBoxDesc className="mb-5 text-left xl:w-[500px] leading-[1.8]">
        Class, launched less than a year ago by Blackboard co-founder Michael
        Chasen, integrates exclusively...
      </NewsBoxDesc>
      <Link href="#!">
        <a className="text-xl text-gray underline">React more</a>
      </Link>
    </div>
  );
};

export default NewsBoxLarge;
