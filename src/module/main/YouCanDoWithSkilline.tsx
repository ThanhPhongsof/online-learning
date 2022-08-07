import { LayoutContainer } from "components/layout";
import { YouCanImage, YouCanWrapper } from "./parts/youcandowithskilline";

const YouCanDoWithSkilline = () => {
  return (
    <section className="youcandowithskilline">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <YouCanWrapper />
          <YouCanImage />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default YouCanDoWithSkilline;
