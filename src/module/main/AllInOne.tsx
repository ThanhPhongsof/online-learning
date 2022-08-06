import { AllInOneMain, AllInOneTop } from "./parts/allinone";

const AllInOne = () => {
  return (
    <section className="allinone flex flex-col gap-28">
      <AllInOneTop></AllInOneTop>
      <AllInOneMain></AllInOneMain>
    </section>
  );
};

export default AllInOne;
