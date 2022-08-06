import {
  SkillineDesc,
  SkillineHeading,
  SkillineImage,
} from "./parts/whatisskilline";

const WhatIsSkilline = () => {
  return (
    <section className="whatisskilline flex flex-col items-center text-center">
      <SkillineHeading />
      <SkillineDesc />
      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-10 xl:gap-20">
        <SkillineImage
          label="For Instructors"
          textButton="Start a class today"
        />
        <SkillineImage
          background="bg-[url('../images/skilline-img-2.png')]"
          label="For Strudents"
          textButton="Enter access code"
          kind="right"
        />
      </div>
    </section>
  );
};

export default WhatIsSkilline;
