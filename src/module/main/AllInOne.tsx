import { LayoutContainer } from "components/layout";
import { AllInOneMain, AllInOneTop } from "./parts/allinone";

const AllInOne = () => {
  return (
    <section className="allinone">
      <LayoutContainer>
        <div className="flex flex-col gap-28">
          <AllInOneTop />
          <AllInOneMain />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default AllInOne;
