import { Logo } from "components/logo";
import {
  FooterCopyRight,
  FooterEmail,
  FooterHeading,
  FooterTemrs,
  FooterZoom,
} from "module/footer";
import LayoutContainer from "./LayoutContainer";

const Footer = () => {
  return (
    <footer className="bg-grayDarker text-purpleLightest">
      <LayoutContainer>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center pt-20 mb-24">
            <Logo className="text-white"></Logo>
            <div className="w-20 border border-purpleLight rotate-90 ml-20 mr-10"></div>
            <FooterZoom />
          </div>
          <FooterHeading />
          <FooterEmail />
          <FooterTemrs />
          <FooterCopyRight />
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
