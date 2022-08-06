import { Button } from "components/button";
import { IconSideBar } from "components/icon";
import { Logo } from "components/logo";
import { SideBar } from "components/sidebar";
import { useClickOutSide } from "services/hook";

const HeaderTop = () => {
  const {
    value: showSideBar,
    setValue: setShowSideBar,
    nodeRef,
  } = useClickOutSide("button");
  return (
    <div className="pt-8 pb-6 md:pb-0 flex items-center">
      <Logo></Logo>
      <SideBar showSideBar={showSideBar} ref={nodeRef}></SideBar>
      <Button
        type="button"
        className="inline-block ml-auto lg:ml-0 lg:hidden"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <span className="pointer-events-none">
          <IconSideBar></IconSideBar>
        </span>
      </Button>
    </div>
  );
};

export default HeaderTop;
