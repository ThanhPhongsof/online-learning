import { LayoutContainer } from "components/layout";
import { YouCanImage, YouCanWrapper } from "./parts/youcandowithskilline";

const YouCanDoWithSkilline = () => {
  return (
    <section className="youcandowithskilline">
      <LayoutContainer>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <YouCanWrapper />
          <YouCanImage />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default YouCanDoWithSkilline;
