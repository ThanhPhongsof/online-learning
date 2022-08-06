import { Button } from "components/button";
import Image from "next/image";
import Link from "next/link";

const HeaderContent = () => {
  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl lg:text-[54px]  text-secondary font-bold mb-8 text-left">
        Studying{" "}
        <span className="text-primary font-extrabold">
          Online is now much easier
        </span>
      </h1>
      <p className="text-grayDark text-lg md:text-2xl font-secondary mb-2 xl:mb-12">
        Skilline is an interesting platform that will teach you in more an
        interactive way
      </p>
      <div className="flex flex-col md:flex-row md:items-center  gap-4 md:gap-10">
        <Button
          type="button"
          href="#!"
          className="px-9 py-6 lg:px-6 lg:py-3 xl:px-9 xl:py-6"
        >
          Join for free
        </Button>
        <Link href="#!">
          <a className="flex items-center gap-8 text-inherit">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-center shadow-lg">
              <Image
                src="/play-img.png"
                width={32}
                height={32}
                className="p-6"
              />
            </div>
            <span>Watch how it works</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderContent;
