import { Button } from "components/button";
import Link from "next/link";
import React, { useEffect } from "react";
import { SideBarModel } from "services/model";

type SideBarProps = {
  showSideBar: boolean;
};

const sidebarList = [
  { link: "Home" },
  { link: "Careers" },
  { link: "Blog" },
  { link: "About Us" },
];

const SideBar = React.forwardRef(
  ({ showSideBar }: SideBarProps, ref: React.LegacyRef<HTMLUListElement>) => {
    const expandClass = "is-expand";

    useEffect(() => {
      const sideBar = document.querySelector(".header-sidebar");
      if (showSideBar) {
        sideBar?.classList.add(expandClass);
      } else {
        sideBar?.classList.remove(expandClass);
      }
    }, [showSideBar]);

    return (
      <ul className="header-sidebar" ref={ref}>
        {sidebarList?.map((item: SideBarModel) => (
          <li key={item.link}>
            <Link href="#!" className="header-sidebar-link">
              <a>{item.link}</a>
            </Link>
          </li>
        ))}
        <li>
          <Button type="button" to="#!" kind="third">
            Login
          </Button>
        </li>
        <li>
          <Button type="button" to="#!">
            Sign Up
          </Button>
        </li>
      </ul>
    );
  }
);

export default SideBar;
