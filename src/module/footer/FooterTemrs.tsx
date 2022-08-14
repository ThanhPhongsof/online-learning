import FooterTemrsLink from "./FooterTemrsLink";

const FooterTemrs = () => {
  return (
    <div className="mb-5 flex justify-center items-center flex-wrap md:flex-nowrap gap-5">
      <FooterTemrsLink>Careers</FooterTemrsLink>
      <div className="w-5 border border-purpleLight rotate-90"></div>
      <FooterTemrsLink>Privacy Policy</FooterTemrsLink>
      <div className="w-5 border border-purpleLight rotate-90"></div>
      <FooterTemrsLink></FooterTemrsLink>
    </div>
  );
};

export default FooterTemrs;
