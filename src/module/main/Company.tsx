import { LayoutContainer } from "components/layout";
import { CompanyHeading, CompanyLogo } from "./parts/company";

const Company = () => {
  return (
    <section className="company">
      <LayoutContainer>
        <div className=" flex flex-col items-center gap-4 lg:gap-8 px-8">
          <CompanyHeading />
          <CompanyLogo />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Company;
