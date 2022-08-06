import { CompanyHeading, CompanyLogo } from "./parts/company";

const Company = () => {
  return (
    <section className="company flex flex-col items-center gap-4 lg:gap-8 px-8 mb-8 md:mb-16">
      <CompanyHeading></CompanyHeading>
      <CompanyLogo></CompanyLogo>
    </section>
  );
};

export default Company;
