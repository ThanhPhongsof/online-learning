import { HeaderMain, HeaderTop } from "module/header";
import LayoutContainer from "./LayoutContainer";

const Header = () => {

  return (
    <header className="header bg-yellow mb-[100px] overflow-hidden">
      <LayoutContainer>
        <HeaderTop></HeaderTop>
        <HeaderMain></HeaderMain>
      </LayoutContainer>
    </header>
  );
};

export default Header;
